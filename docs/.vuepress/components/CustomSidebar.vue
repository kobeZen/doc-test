<template>
  <aside class="custom-sidebar" :class="{ 'dark-theme': isDark }">
    
    
    <nav class="sidebar-nav">
      <!-- 搜索框 -->
      <div class="search-section">
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Search page content..."
            class="search-input"
            @input="handleSearch"
            @keydown.enter="performSearch"
          >
          <button class="search-button" @click="performSearch">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
        <div v-if="searchResults.length > 0" class="search-results">
          <div 
            v-for="result in searchResults" 
            :key="result.id"
            class="search-result-item"
            @click="scrollToResult(result)"
          >
            <div class="result-title">{{ result.title }}</div>
            <div class="result-preview">{{ result.preview }}</div>
          </div>
        </div>
        <div v-if="searchQuery && searchResults.length === 0" class="no-results">
          No relevant content found
        </div>
      </div>
      
      <!-- 当前页面目录 -->
      <div v-if="pageHeaders.length > 0" class="nav-section">
        <!-- <h4 class="section-title">页面目录</h4> -->
        <ul class="nav-list">
          <HeaderItem 
            v-for="header in pageHeaders" 
            :key="header.slug" 
            :header="header"
            :active-slug="activeHeaderSlug"
            :expanded-headers="expandedHeaders"
            @scroll-to="scrollToHeader"
            @toggle="toggleHeader"
          />
        </ul>
      </div>
      
    
    </nav>
    
   
  </aside>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSiteData, usePageData } from '@vuepress/client'
import HeaderItem from './HeaderItem.vue'

// 接收props
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const router = useRouter()
const siteData = useSiteData()
const pageData = usePageData()

const activeHeaderSlug = ref('')
const searchQuery = ref('')
const searchResults = ref([])
const expandedHeaders = ref(new Set()) // 管理展开的标题
const isScrollingToHeader = ref(false) // 控制是否正在滚动到指定标题

// 页面标题映射
const pageTitleMap = {
  '/': '首页',
  '/web-socket-streams': 'WebSocket 流',
  '/user-data-stream': '用户数据流',
  '/errors': '错误代码'
}

// 页面图标映射
const pageIconMap = {
  '/': 'icon-home',
  '/web-socket-streams': 'icon-websocket',
  '/user-data-stream': 'icon-user',
  '/errors': 'icon-error'
}

// 标题级别图标映射
const headerIconMap = {
  1: 'icon-h1',
  2: 'icon-h2', 
  3: 'icon-h3',
  4: 'icon-h4',
  5: 'icon-h5',
  6: 'icon-h6'
}

// 当前页面标题
const currentPageTitle = computed(() => {
  return pageData.value?.title || pageTitleMap[route.path] || '文档'
})

// 当前页面的标题结构
const pageHeaders = computed(() => {
  const headers = pageData.value?.headers || []
  return headers
})

// 侧边栏页面导航
const sidebarPages = computed(() => {
  const sidebar = siteData.value?.themeConfig?.sidebar || []
  
  if (!sidebar.length) {
    return [
      { link: '/', text: '首页' },
      { link: '/web-socket-streams', text: 'WebSocket 流' },
      { link: '/user-data-stream', text: '用户数据流' },
      { link: '/errors', text: '错误代码' }
    ]
  }
  // 扁平化所有页面
  const pages = []
  sidebar.forEach(section => {
    if (section.children) {
      section.children.forEach(child => {
        const link = typeof child === 'string' ? child : child.link || child
        const text = typeof child === 'object' && child.text 
          ? child.text 
          : pageTitleMap[link] || getPageTitle(link)
        
        pages.push({ link, text })
      })
    }
  })
  
  return pages
})

// 获取页面标题
const getPageTitle = (path) => {
  try {
    const pages = router.getRoutes()
    const page = pages.find(p => p.path === path)
    
    if (page && page.meta?.title) {
      return page.meta.title
    }
  } catch (error) {
    console.warn('Error getting page title:', error)
  }
  
  if (path === '/') return '首页'
  return path.split('/').pop().replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

// 获取页面图标
const getPageIcon = (link) => {
  return pageIconMap[link] || 'icon-page'
}

// 获取标题图标
const getHeaderIcon = (level) => {
  return headerIconMap[level] || 'icon-header'
}

// 判断页面是否激活
const isActivePage = (link) => {
  return route.path === link
}

// 判断标题是否激活
const isActiveHeader = (slug) => {
  return activeHeaderSlug.value === slug
}

// 滚动到指定标题
const scrollToHeader = (slug) => {
  const element = document.getElementById(slug)
  if (element) {
    // 设置标志，临时禁用 Intersection Observer 的自动更新
    isScrollingToHeader.value = true
    
    // 立即设置活跃标题
    activeHeaderSlug.value = slug
    
    // 获取导航栏高度
    const navbar = document.querySelector('.navbar')
    const navbarHeight = navbar ? navbar.offsetHeight : 60
    
    // 计算滚动位置，留出导航栏高度的空间
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset
    const scrollToPosition = elementTop - navbarHeight - 20 // 额外留20px间距
    
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    })
    
    // 滚动完成后重新启用 Intersection Observer
    // 使用较长的延迟确保滚动动画完成
    setTimeout(() => {
      isScrollingToHeader.value = false
    }, 1000)
  }
}

// 切换标题展开状态
const toggleHeader = (slug) => {
  const expanded = expandedHeaders.value
  const header = findHeaderBySlug(pageHeaders.value, slug)
  
  if (!header) return
  
  if (expanded.has(slug)) {
    // 如果当前是展开状态，则收起
    expanded.delete(slug)
    closeAllChildren(header)
  } else {
    // 如果当前是收起状态，则展开
    expanded.add(slug)
    
    // 手风琴效果：如果是顶级菜单，收起其他同级的顶级菜单
    const minLevel = Math.min(...pageHeaders.value.map(h => h.level))
    if (header.level === minLevel) {
      // 当前是顶级菜单，收起其他同级的顶级菜单
      const topLevelHeaders = pageHeaders.value.filter(h => h.level === minLevel)
      topLevelHeaders.forEach(h => {
        if (h.slug !== slug && expanded.has(h.slug)) {
          expanded.delete(h.slug)
          closeAllChildren(h)
        }
      })
    }
  }
}

// 递归关闭所有子菜单
const closeAllChildren = (header) => {
  const expanded = expandedHeaders.value
  if (header.children) {
    header.children.forEach(child => {
      expanded.delete(child.slug)
      closeAllChildren(child)
    })
  }
}

// 根据slug查找标题
const findHeaderBySlug = (headers, slug) => {
  for (const header of headers) {
    if (header.slug === slug) {
      return header
    }
    if (header.children) {
      const found = findHeaderBySlug(header.children, slug)
      if (found) return found
    }
  }
  return null
}

// 检查标题是否展开
const isHeaderExpanded = (slug) => {
  return expandedHeaders.value.has(slug)
}

// 搜索页面内容
const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }
  
  performSearch()
}

const performSearch = () => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    searchResults.value = []
    return
  }
  
  const results = []
  const contentElement = document.querySelector('.page-content')
  
  if (contentElement) {
    // 搜索所有文本节点
    const walker = document.createTreeWalker(
      contentElement,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )
    
    let node
    while (node = walker.nextNode()) {
      const text = node.textContent
      if (text && text.toLowerCase().includes(query)) {
        const parent = node.parentElement
        if (parent && !parent.closest('.search-section')) {
          // 获取包含该文本的标题
          const header = parent.closest('h1, h2, h3, h4, h5, h6') || 
                        parent.querySelector('h1, h2, h3, h4, h5, h6') ||
                        contentElement.querySelector('h1, h2, h3, h4, h5, h6')
          
          const title = header ? header.textContent : '页面内容'
          const preview = getTextPreview(text, query)
          const id = header ? header.id || generateId() : generateId()
          
          // 避免重复结果
          if (!results.find(r => r.title === title && r.preview === preview)) {
            results.push({
              id,
              title,
              preview,
              element: header || parent
            })
          }
        }
      }
    }
  }
  
  searchResults.value = results.slice(0, 10) // 限制结果数量
}

// 获取文本预览
const getTextPreview = (text, query) => {
  const queryIndex = text.toLowerCase().indexOf(query.toLowerCase())
  const start = Math.max(0, queryIndex - 30)
  const end = Math.min(text.length, queryIndex + query.length + 30)
  let preview = text.substring(start, end)
  
  if (start > 0) preview = '...' + preview
  if (end < text.length) preview = preview + '...'
  
  // 高亮搜索词
  const regex = new RegExp(`(${query})`, 'gi')
  preview = preview.replace(regex, '<mark>$1</mark>')
  
  return preview
}

// 生成唯一ID
const generateId = () => {
  return 'search-result-' + Math.random().toString(36).substr(2, 9)
}

// 滚动到搜索结果
const scrollToResult = (result) => {
  if (result.element) {
    // 临时禁用 Intersection Observer 的自动更新
    isScrollingToHeader.value = true
    
    result.element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    // 高亮元素
    result.element.style.backgroundColor = '#fff3cd'
    setTimeout(() => {
      result.element.style.backgroundColor = ''
    }, 2000)
    
    // 清空搜索结果
    searchQuery.value = ''
    searchResults.value = []
    
    // 重新启用 Intersection Observer
    setTimeout(() => {
      isScrollingToHeader.value = false
    }, 1000)
  }
}

// 监听滚动，更新活跃的标题
let observer = null

const initIntersectionObserver = () => {
  // 清理之前的observer
  if (observer) {
    observer.disconnect()
  }
  
  const headers = flattenHeaders(pageHeaders.value)
  if (!headers.length) return
  
  // 获取导航栏高度作为根边距
  const navbar = document.querySelector('.navbar')
  const navbarHeight = navbar ? navbar.offsetHeight : 60
  
  const options = {
    root: null,
    rootMargin: `-${navbarHeight + 60}px 0px -80% 0px`,
    threshold: 0
  }
  
  observer = new IntersectionObserver((entries) => {
    // 如果正在手动滚动到指定标题，忽略 Observer 的更新
    if (isScrollingToHeader.value) {
      return
    }
    
    // 找到第一个可见的标题
    const visibleEntries = entries.filter(entry => entry.isIntersecting)
    
    if (visibleEntries.length > 0) {
      // 按照在页面中的顺序排序
      visibleEntries.sort((a, b) => {
        const aRect = a.target.getBoundingClientRect()
        const bRect = b.target.getBoundingClientRect()
        return aRect.top - bRect.top
      })
      
      const firstVisible = visibleEntries[0]
      const slug = firstVisible.target.id
      
      if (slug && activeHeaderSlug.value !== slug) {
        activeHeaderSlug.value = slug
      }
    }
  }, options)
  
  // 观察所有扁平化的标题元素（用于滚动高亮）
  headers.forEach(header => {
    const element = document.getElementById(header.slug)
    if (element) {
      observer.observe(element)
    }
  })
}

onMounted(() => {
  // 延迟初始化，确保DOM已渲染
  setTimeout(() => {
    initIntersectionObserver()
  }, 500)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// 监听页面数据变化，重新初始化observer
watch(pageData, () => {
  setTimeout(() => {
    initIntersectionObserver()
  }, 300)
}, { deep: true })

// 监听活跃标题变化，自动展开相关路径
watch(activeHeaderSlug, (newSlug) => {
  if (newSlug) {
    // 找到当前活跃标题的所有父级标题并展开
    const expandPath = (headers, targetSlug, path = []) => {
      for (const header of headers) {
        const currentPath = [...path, header.slug]
        if (header.slug === targetSlug) {
          // 展开路径上的所有父级
          path.forEach(slug => expandedHeaders.value.add(slug))
          
          // 找到顶级父菜单（path中的第一个，也就是最顶层的）
          if (path.length > 0) {
            const topLevelSlug = path[0]
            // 收起其他顶级菜单
            const minLevel = Math.min(...pageHeaders.value.map(h => h.level))
            const topLevelHeaders = pageHeaders.value.filter(h => h.level === minLevel)
            topLevelHeaders.forEach(h => {
              if (h.slug !== topLevelSlug) {
                expandedHeaders.value.delete(h.slug)
                closeAllChildren(h)
              }
            })
          }
          return true
        }
        if (header.children) {
          if (expandPath(header.children, targetSlug, currentPath)) {
            return true
          }
        }
      }
      return false
    }
    
    expandPath(pageHeaders.value, newSlug)
  }
}, { immediate: true })

// 扁平化标题（用于Intersection Observer）
const flattenHeaders = (headers) => {
  const flattened = []
  const stack = [...headers]
  
  while (stack.length > 0) {
    const header = stack.pop()
    flattened.push(header)
    
    if (header.children) {
      stack.push(...header.children)
    }
  }
  
  return flattened.reverse()
}
</script>

<style lang="scss" scoped>
.custom-sidebar {
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 60px;
  padding-bottom: 60px;
  z-index: 100;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  background: white;
  
  .sidebar-logo {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }
  
  .sidebar-title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1976d2;
  }
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
  
  /* 自定义滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.3s ease;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }
  

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 3px;
    transition: background 0.3s ease;
  }
  
  /* 悬停时显示滚动条 */
  &:hover {
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
    
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  
  /* 滚动时显示滚动条 */
  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.6);
  }
}

.search-section {
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1rem;
  
  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:focus-within {
      border-color: #1976d2;
    }
    
    .search-input {
      flex: 1;
      border: none;
      outline: none;
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
      background: transparent;
      box-shadow: none;
      &::placeholder {
        color: #6c757d;
      }
    }
    
    .search-button {
      background: none;
      border: none;
      padding: 0.875rem;
      cursor: pointer;
      color: #6c757d;
      transition: all 0.3s ease;
      
      &:hover {
        color: #1976d2;
        background-color: rgba(25, 118, 210, 0.05);
      }
    }
  }
  
  .search-results {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 0.5rem;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    background: white;
    
    /* 自定义滚动条样式 */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 0.3s ease;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 2px;
      transition: background 0.3s ease;
    }
    
    /* 悬停时显示滚动条 */
    &:hover {
      scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
      
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.4);
      }
    }
    
    .search-result-item {
      padding: 0.75rem;
      border-bottom: 1px solid #f8f9fa;
      cursor: pointer;
      transition: background-color 0.3s ease;
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        background-color: #f8f9fa;
      }
      
      .result-title {
        font-weight: 600;
        color: #1976d2;
        font-size: 0.85rem;
        margin-bottom: 0.25rem;
      }
      
      .result-preview {
        font-size: 0.8rem;
        color: #6c757d;
        line-height: 1.4;
        
        :deep(mark) {
          background-color: #fff3cd;
          color: #856404;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
    }
  }
  
  .no-results {
    text-align: center;
    padding: 1rem;
    color: #6c757d;
    font-size: 0.85rem;
    background: #f8f9fa;
    border-radius: 6px;
    margin-top: 0.5rem;
  }
}

.nav-section {
  margin-bottom: 2rem;
  
  .section-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #6c757d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 1rem 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e9ecef;
  }
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-sublist {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 0.5rem;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  background: white;
  
  .version-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: #6c757d;
    
    .version-number {
      background-color: #e9ecef;
      padding: 0.2rem 0.5rem;
      border-radius: 12px;
      font-weight: 600;
    }
  }
}

// 图标字体
.icon-home::before { content: '🏠'; font-size: 1.2em; }
.icon-websocket::before { content: '🔗'; font-size: 1.2em; }
.icon-user::before { content: '👤'; font-size: 1.2em; }
.icon-error::before { content: '⚠️'; font-size: 1.2em; }
.icon-page::before { content: '📄'; font-size: 1.2em; }
.icon-h1::before { content: '1️⃣'; font-size: 1.1em; }
.icon-h2::before { content: '2️⃣'; font-size: 1.1em; }
.icon-h3::before { content: '3️⃣'; font-size: 1.1em; }
.icon-h4::before { content: '4️⃣'; font-size: 1.1em; }
.icon-h5::before { content: '5️⃣'; font-size: 1.1em; }
.icon-h6::before { content: '6️⃣'; font-size: 1.1em; }
.icon-header::before { content: '📝'; font-size: 1.1em; }
.icon-external::before { content: '🌐'; font-size: 1.2em; }
.icon-github::before { content: '📁'; font-size: 1.2em; }

// 暗色主题
.custom-sidebar.dark-theme {
  background: #141414;
  border-right-color: #404040;
  
  .sidebar-header {
    background: #2a2a2a;
    border-bottom-color: #404040;
    
    .sidebar-title {
      color: #64b5f6;
    }
  }
  .header-link{
    color: #fff!important;
  }
  .search-section {
    border-bottom-color: #404040;
    
    .search-box {
      background: #3a3a3a;
      border-color: #525252;
      
      &:focus-within {
        border-color: #64b5f6;
      }
      
      .search-input {
        color: #e5e5e5;
        
        &::placeholder {
          color: #a0a0a0;
        }
      }
      
      .search-button {
        color: #a0a0a0;
        
        &:hover {
          color: #64b5f6;
          background-color: rgba(100, 181, 246, 0.1);
        }
      }
    }
    
    .search-results {
      background: #3a3a3a;
      border-color: #525252;
      
      /* 暗色主题滚动条 */
      &:hover {
        scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
        
        &::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.25);
        }
        
        &::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      }
      
      .search-result-item {
        border-bottom-color: #525252;
        
        &:hover {
          background-color: #454545;
        }
        
        .result-title {
          color: #64b5f6;
        }
        
        .result-preview {
          color: #b0b0b0;
          
          :deep(mark) {
            background-color: #404040;
            color: #64b5f6;
          }
        }
      }
    }
    
    .no-results {
      background: #3a3a3a;
      color: #a0a0a0;
    }
  }
  
  /* 暗色主题侧边栏导航滚动条 */
  .sidebar-nav {
    &:hover {
      scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
      
      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.25);
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
      }
    }
    
    &::-webkit-scrollbar-thumb:active {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  
  .section-title {
    color: #b0b0b0;
    border-bottom-color: #404040;
  }
  
  .sidebar-footer {
    background: #2a2a2a;
    border-top-color: #404040;
    
    .version-info {
      color: #b0b0b0;
      
      .version-number {
        background-color: #404040;
        color: #e0e0e0;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .custom-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    
    &.open {
      transform: translateX(0);
    }
  }
}
</style>
