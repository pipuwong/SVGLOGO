<script lang="ts">
  import { cn } from '@/utils/cn';
  import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-svelte';
  import Container from '@/components/container.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.post.title} - SVGLOGO</title>
  <meta name="description" content={data.post.description} />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.description} />
  <meta property="og:type" content="article" />
</svelte:head>

<Container>
  <div class="max-w-5xl mx-auto py-8 px-8 md:px-24">
    <!-- 返回按钮 -->
    <div class="mb-8">
      <a 
        href="/blog" 
        class="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft size={16} class="mr-2" />
        返回博客列表
      </a>
    </div>
    
    
    <!-- 文章内容 -->
    <article class="prose prose-neutral dark:prose-invert max-w-none">
      <svelte:component this={data.content} />
    </article>
  </div>
</Container>

<style>
  :global(.prose) {
    @apply text-neutral-700 dark:text-neutral-300;
  }
  
  :global(.prose h1),
  :global(.prose h2),
  :global(.prose h3),
  :global(.prose h4),
  :global(.prose h5),
  :global(.prose h6) {
    @apply text-neutral-900 dark:text-white;
  }
  
  :global(.prose a) {
    @apply text-neutral-900 dark:text-white no-underline hover:underline;
  }
  
  :global(.prose code) {
    @apply bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm;
  }
  
  :global(.prose pre) {
    @apply bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700;
  }
</style>