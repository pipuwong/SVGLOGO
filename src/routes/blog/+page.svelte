<script lang="ts">
  import { cn } from '@/utils/cn';
  import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-svelte';
  import Container from '@/components/container.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>博客 - SVGLOGO</title>
  <meta name="description" content="SVGLOGO博客，分享设计资源、技术教程和行业趋势" />
</svelte:head>

<Container>
  <div class="py-8">

    <!-- 页面标题 -->
    <div class="text-center mb-12 bg-white dark:bg-neutral-900 bg-[url('/images/hero-pattern_light.svg')] dark:bg-[url('/images/hero-pattern_dark.svg')]">
      <h1 class="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
        博客文章
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        分享设计资源、技术教程和行业趋势
      </p>
    </div>

    <!-- 博客文章列表 - 修改为响应式三列布局 -->
    <div class="py-6 px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.posts as post}
        <article class="group h-full">
          <a 
            href="/blog/{post.slug}" 
            class="block h-full p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 hover:shadow-lg"
          >
            <!-- 文章标题 -->
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors mb-3">
              {post.title}
            </h2>
            
            <!-- 文章描述 -->
            <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
              {post.description}
            </p>
            
            <!-- 标签 -->
            <div class="flex flex-wrap gap-2 mb-4">
              {#each post.tags as tag}
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
                  <Tag size={12} class="mr-1" />
                  {tag}
                </span>
              {/each}
            </div>
            
            <!-- 元信息 -->
            <div class="flex items-center justify-between text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-auto">
              <div class="flex items-center">
                <span class="flex items-center">
                  <Calendar size={14} class="mr-1.5" />
                  {new Date(post.date).toLocaleDateString('zh-CN')}
                </span>
              </div>
              
              <span class="flex items-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                查看详情
                <ArrowUpRight size={14} class="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </a>
        </article>
      {/each}
    </div>
    
    <!-- 如果没有文章 -->
    {#if data.posts.length === 0}
      <div class="text-center py-12">
        <p class="text-neutral-500 dark:text-neutral-400">
          暂无博客文章
        </p>
      </div>
    {/if}
  </div>
</Container>