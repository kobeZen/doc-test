<template>
  <li class="header-item" :class="[`level-${header.level}`, { 'has-children': hasChildren, 'is-expanded': isExpanded, 'is-active': isActive }]">
    <div class="header-content">
      <!-- 展开/折叠按钮 -->
      <button 
        v-if="hasChildren"
        class="expand-btn"
        :class="{ 'expanded': isExpanded }"
        @click="handleToggle"
      >
        <svg class="expand-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/>
        </svg>
      </button>
      <div v-else class="expand-placeholder"></div>
      
      <!-- 标题链接 -->
      <a 
        :href="'#' + header.slug"
        class="header-link"
        :class="{ 'active': isActive }"
        @click.prevent="$emit('scroll-to', header.slug)"
      >
        <span class="header-text">{{ header.title }}</span>
      </a>
    </div>
    
    <!-- 子标题列表 -->
    <transition name="slide">
      <ul v-if="hasChildren && isExpanded" class="children-list">
        <HeaderItem 
          v-for="child in header.children" 
          :key="child.slug"
          :header="child"
          :active-slug="activeSlug"
          :expanded-headers="expandedHeaders"
          @scroll-to="$emit('scroll-to', $event)"
          @toggle="$emit('toggle', $event)"
        />
      </ul>
    </transition>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  header: Object,
  activeSlug: String,
  expandedHeaders: Set
})

const emit = defineEmits(['scroll-to', 'toggle'])

const hasChildren = computed(() => {
  return props.header.children && props.header.children.length > 0
})

const isExpanded = computed(() => {
  return props.expandedHeaders.has(props.header.slug)
})

const isActive = computed(() => {
  return props.activeSlug === props.header.slug
})

const handleToggle = () => {
  emit('toggle', props.header.slug)
}
</script>

<style lang="scss" scoped>
.header-item {
  position: relative;
  
  &.level-1 {
    --indent: 0;
    --text-size: 0.95rem;
    --text-weight: 600;
  }
  
  &.level-2 {
    --indent: 1rem;
    --text-size: 0.9rem;
    --text-weight: 500;
  }
  
  &.level-3 {
    --indent: 2rem;
    --text-size: 0.85rem;
    --text-weight: 500;
  }
  
  &.level-4 {
    --indent: 3rem;
    --text-size: 0.8rem;
    --text-weight: 400;
  }
  
  &.level-5 {
    --indent: 4rem;
    --text-size: 0.8rem;
    --text-weight: 400;
  }
  
  &.level-6 {
    --indent: 5rem;
    --text-size: 0.75rem;
    --text-weight: 400;
  }
}

.header-content {
  display: flex;
  align-items: center;
  margin-left: var(--indent);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(25, 118, 210, 0.05);
  }
}

.expand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  background: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: #6c757d;
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    background-color: rgba(25, 118, 210, 0.1);
    color: #1976d2;
  }
  
  &.expanded {
    .expand-icon {
      transform: rotate(90deg);
    }
  }
}

.expand-placeholder {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

.expand-icon {
  transition: transform 0.2s ease;
}

.header-link {
  flex: 1;
  display: flex;
  align-items: center;
  color: #495057;
  text-decoration: none;
  font-size: var(--text-size);
  font-weight: var(--text-weight);
  line-height: 1.4;
  transition: all 0.2s ease;
  padding: 0.25rem 0;
  
  &:hover {
    color: #1976d2;
  }
  
  &.active {
    color: #1976d2;
    font-weight: 600;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: -0.8rem;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 80%;
      background: linear-gradient(to bottom, #1976d2, #42a5f5);
      border-radius: 2px;
    }
  }
}

.header-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.children-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

// 展开/折叠动画
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  transform-origin: top;
}

.slide-enter-from {
  opacity: 0;
  transform: scaleY(0);
  max-height: 0;
}

.slide-leave-to {
  opacity: 0;
  transform: scaleY(0);
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: scaleY(1);
  max-height: 1000px;
}

// 暗色主题适配
:global(.dark-theme) .header-item {
  .header-content:hover {
    background-color: rgba(100, 181, 246, 0.08);
  }
  
  .expand-btn {
    color: #a0a0a0;
    
    &:hover {
      background-color: rgba(100, 181, 246, 0.15);
      color: #64b5f6;
    }
  }
  
  .header-link {
    color: #e0e0e0;
    
    &:hover {
      color: #64b5f6;
    }
    
    &.active {
      color: #64b5f6;
      
      &::before {
        background: linear-gradient(to bottom, #64b5f6, #42a5f5);
      }
    }
  }
}
</style> 