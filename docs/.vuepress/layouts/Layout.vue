<template>
  <div class="theme-container" :class="containerClass">
    <!-- 移动端遮罩层 -->
    <div 
      class="sidebar-mask" 
      :class="{ 'show': isSidebarOpen }"
      @click="toggleSidebar"
    ></div>

    

    <!-- 主内容区域 -->
    <div class="main-container">
      <!-- 头部导航栏 -->
      <header class="navbar">
        <div class="navbar-content">
          <!-- 移动端菜单按钮 -->
          <button 
            class="sidebar-toggle"
            :class="{ 'active': isSidebarOpen }"
            @click="toggleSidebar"
            aria-label="切换侧边栏"
          >
            <span class="toggle-line"></span>
            <span class="toggle-line"></span>
            <span class="toggle-line"></span>
          </button>

          <!-- Logo和标题 -->
          <div class="navbar-brand">
            <img 
              src="https://static.pro.coins.xyz/static_web/static_pro/images/logo_icon.svg" 
              alt="Coins Logo" 
              class="navbar-logo"
            >
            <span class="navbar-title">Coins APIs</span>
          </div>

          <!-- 右侧导航和操作区域 -->
          <div class="navbar-right">
            <!-- 导航链接 -->
            <nav class="navbar-nav">
              <router-link 
                v-for="item in navItems" 
                :key="item.link"
                :to="item.link" 
                class="nav-link"
                :class="{ 'is-active': isActiveNavItem(item.link) }"
              >
                {{ item.text }}
              </router-link>
            </nav>

            <!-- 主题切换和其他操作 -->
            <div class="navbar-actions">
              <button 
                class="theme-toggle"
                @click="toggleTheme"
                :title="isDark ? '切换到浅色主题' : '切换到深色主题'"
              >
                <span class="theme-icon">{{ isDark ? '☀️' : '🌙' }}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- 页面内容 -->
      <main class="page-content">
        <!-- 自定义侧边栏 -->
        <CustomSidebar :class="{ 'open': isSidebarOpen }" :is-dark="isDark" />
        <div class="content-wrapper">
          <!-- 面包屑导航 -->
          <nav class="breadcrumb" v-if="breadcrumbs.length > 1">
            <ol class="breadcrumb-list">
              <li 
                v-for="(crumb, index) in breadcrumbs" 
                :key="index"
                class="breadcrumb-item"
              >
                <router-link 
                  v-if="index < breadcrumbs.length - 1"
                  :to="crumb.link"
                  class="breadcrumb-link"
                >
                  {{ crumb.text }}
                </router-link>
                <span v-else class="breadcrumb-current">{{ crumb.text }}</span>
              </li>
            </ol>
          </nav>

          <!-- 页面主要内容 -->
          <div class="page-main">
            <Content />
          </div>

          <!-- 页面导航 -->
          <nav class="page-nav" v-if="prev || next">
            <div class="nav-links">
              <div class="nav-link-item prev" v-if="prev">
                <router-link :to="prev.link" class="nav-link-button">
                  <span class="nav-direction">← 上一页</span>
                  <span class="nav-title">{{ prev.text }}</span>
                </router-link>
              </div>
              <div class="nav-link-item next" v-if="next">
                <router-link :to="next.link" class="nav-link-button">
                  <span class="nav-direction">下一页 →</span>
                  <span class="nav-title">{{ next.text }}</span>
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </main>

      <!-- 页脚 -->
      <footer class="page-footer">
        <div class="footer-content">
          
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import CustomSidebar from '../components/CustomSidebar.vue'

const route = useRoute()
const isSidebarOpen = ref(false)
const isDark = ref(false)

const navItems = [
  { text: 'Rest-Api', link: '/' },
  { text: 'Web-Socket-Streams', link: '/web-socket-streams' },
  { text: 'User-Data-Stream', link: '/user-data-stream' },
  { text: 'Errors', link: '/errors' }
]

const containerClass = computed(() => ({
  'sidebar-open': isSidebarOpen.value,
  'dark-theme': isDark.value
}))

const breadcrumbs = computed(() => {
  const path = route.path
  const crumbs = [{ text: '首页', link: '/' }]
  
  const currentItem = navItems.find(item => item.link === path)
  if (currentItem && path !== '/') {
    crumbs.push({ text: currentItem.text, link: path })
  }
  
  return crumbs
})

const currentIndex = computed(() => {
  return navItems.findIndex(item => item.link === route.path)
})

const prev = computed(() => {
  const index = currentIndex.value
  return index > 0 ? navItems[index - 1] : null
})

const next = computed(() => {
  const index = currentIndex.value
  return index >= 0 && index < navItems.length - 1 ? navItems[index + 1] : null
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// 检测导航项是否为当前活跃项
const isActiveNavItem = (link) => {
  // 处理首页的特殊情况
  if (link === '/' && route.path === '/') {
    return true
  }
  // 对于其他页面，检查路径是否以链接开头（除了首页）
  if (link !== '/' && route.path.startsWith(link)) {
    return true
  }
  return false
}

// 处理窗口大小变化
const handleResize = () => {
  if (window.innerWidth > 768) {
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  // 恢复主题设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
  
  // 调试路由信息
  console.log('Current route:', route.path)
  console.log('Nav items:', navItems)
  
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.theme-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--c-bg);
  color: var(--c-text);
  transition: all 0.3s ease;
}

.sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  
  &.show {
    opacity: 1;
    visibility: visible;
  }
}

.main-container {
  flex: 1;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s ease;
  width: 100%;
  @media (max-width: 768px) {
    margin-left: 0;
  }
}

.navbar {
  background: white;
  border-bottom: 1px solid var(--c-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  
  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 60px;
    // max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  .sidebar-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-right: 1rem;
    
    @media (max-width: 768px) {
      display: flex;
    }
    
    .toggle-line {
      width: 20px;
      height: 2px;
      background: var(--c-text);
      margin: 2px 0;
      transition: all 0.3s ease;
    }
    
    &.active {
      .toggle-line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .toggle-line:nth-child(2) {
        opacity: 0;
      }
      .toggle-line:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
    
    .navbar-logo {
      width: 32px;
      height: 32px;
      margin-right: 0.5rem;
    }
    
    .navbar-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--c-brand);
    }
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .navbar-nav {
    display: flex;
    
    @media (max-width: 768px) {
      display: none;
    }
    
    .nav-link {
      color: var(--c-text);
      text-decoration: none;
      font-weight: 500;
      padding: 0.75rem 1rem;
      position: relative;
      transition: all 0.3s ease;
      border-radius: 4px;
      
      &:hover {
        color: var(--c-brand);
        background-color: rgba(25, 118, 210, 0.05);
      }
      
      &.is-active {
        color: var(--c-brand);
        font-weight: 700;
        background-color: rgba(25, 118, 210, 0.08);
        
        /* 下划线效果 */
        &::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 1rem;
          right: 1rem;
          height: 3px;
          background: linear-gradient(90deg, var(--c-brand) 0%, #42a5f5 100%);
          border-radius: 2px;
          animation: slideIn 0.3s ease-out;
        }
        
        &:hover {
          color: #1565c0;
          background-color: rgba(25, 118, 210, 0.12);
        }
      }
    }
  }
  
  @keyframes slideIn {
    from {
      transform: scaleX(0);
      opacity: 0;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  .navbar-actions {
    .theme-toggle {
      background: none;
      border: 1px solid var(--c-border);
      border-radius: 6px;
      padding: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: var(--c-bg-light);
      }
      
      .theme-icon {
        font-size: 1.2rem;
      }
    }
  }
}

.page-content {
  flex: 1;
  
  .content-wrapper {
    margin-left: 280px;
    max-width: calc(100% - 280px);
    padding: 2rem;
    
    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
}

.breadcrumb {
  margin-bottom: 2rem;
  
  .breadcrumb-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    .breadcrumb-item {
      &:not(:last-child)::after {
        content: '/';
        margin: 0 0.5rem;
        color: var(--c-text-light);
      }
      
      .breadcrumb-link {
        color: var(--c-brand);
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
      
      .breadcrumb-current {
        color: var(--c-text-light);
      }
    }
  }
}

.page-nav {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--c-border);
  
  .nav-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    
    .nav-link-item {
      &.next {
        text-align: right;
        
        @media (max-width: 768px) {
          text-align: left;
        }
      }
      
      .nav-link-button {
        display: block;
        padding: 1rem;
        background: var(--c-bg-light);
        border: 1px solid var(--c-border);
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          background: var(--c-brand-light);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
        }
        
        .nav-direction {
          font-size: 0.9rem;
          color: var(--c-text-light);
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .nav-title {
          font-weight: 600;
          color: var(--c-text);
        }
      }
    }
  }
}

.page-footer {
  background: var(--c-bg-light);
  border-top: 1px solid var(--c-border);
  padding: 2rem;
  
  .footer-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
    
    .footer-info {
      p {
        margin: 0.25rem 0;
        color: var(--c-text-light);
        font-size: 0.9rem;
      }
    }
    
    .footer-links {
      display: flex;
      gap: 1rem;
      
      a {
        color: var(--c-brand);
        text-decoration: none;
        font-size: 0.9rem;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

// 暗色主题
.dark-theme {
  .navbar {
    background: var(--c-bg-light);
    
    .navbar-nav {
      .nav-link {
        &:hover {
          color: #74b9ff;
          background-color: rgba(116, 185, 255, 0.08);
        }
        
        &.is-active {
          color: #74b9ff;
          font-weight: 700;
          background-color: rgba(116, 185, 255, 0.12);
          
          &::after {
            background: linear-gradient(90deg, #74b9ff 0%, #0984e3 100%);
          }
          
          &:hover {
            color: #54a3ff;
            background-color: rgba(116, 185, 255, 0.16);
          }
        }
      }
    }
  }
  
  .nav-link-button:hover {
    .nav-direction {
      color: rgba(255, 255, 255, 0.8);
    }
    
    .nav-title {
      color: white;
    }
  }
}
</style> 