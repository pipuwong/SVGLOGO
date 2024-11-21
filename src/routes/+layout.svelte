<script lang="ts">
import type { LayoutServerData } from "./$types";
export let data: LayoutServerData;

// Global styles:
import "../app.css";
import { cn } from "@/utils/cn";
import { ModeWatcher, mode } from "mode-watcher";
import { sidebarCategoryCountStyles } from "@/ui/styles";
import { sidebarItemStyles } from "@/ui/styles";
import { onMount } from 'svelte';

// Get categories:
import { svgs } from "@/data/svgs";
const categories = svgs
  .flatMap((svg) =>
    Array.isArray(svg.category) ? svg.category : [svg.category],
  )
  .filter((category, index, array) => array.indexOf(category) === index);

// Get category counts:
let categoryCounts: Record<string, number> = {};
categories.forEach((category) => {
  categoryCounts[category] = svgs.filter((svg) =>
    svg.category.includes(category),
  ).length;
});

// Toaster:
import { Toaster } from "svelte-sonner";

// Components for all pages:
import Transition from "@/components/transition.svelte";
import Warning from "@/components/warning.svelte";

// Layout:
import Navbar from "@/components/navbar.svelte";
import { ArrowUpRight } from "lucide-svelte";

// State for visitor statistics
let visitorCount = '';
let loading = true;

onMount(async () => {
  try {
    const response = await fetch("https://v6-widget.51.la/v6/Kdb6i5hQGkAkkUoZ/quote.js");
    const data = await response.text();
    const num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g);
    if (num && num[6]) {
      visitorCount = (parseInt(num[6], 10) + 7500).toString();
    }
  } catch (error) {
    console.error('Failed to fetch visitor count:', error);
  } finally {
    loading = false;
  }
});
</script>

<ModeWatcher />
<Navbar currentPath={data.pathname} />
<main>
  <aside
    class={cn(
      'z-50 w-full overflow-y-auto overflow-x-hidden',
      'dark:border-neutral-800 md:fixed md:left-0 md:h-full md:w-56',
      'bg-white dark:bg-neutral-900',
      'opacity-95 backdrop-blur-md',
      'border-r border-neutral-200 dark:border-neutral-800',
      'flex flex-col'
    )}
  >
    <div class="flex h-full flex-col md:px-3 md:py-6">
      <nav
        class="flex flex-1 items-center space-x-1 overflow-y-auto px-6 pb-2 pt-2 md:mb-3 md:flex-col md:space-x-0 md:space-y-1 md:overflow-y-visible md:px-0 md:pt-0"
      >
        <a
          href="/"
          class={cn(
            sidebarItemStyles,
            data.pathname === '/'
              ? 'bg-neutral-200 font-medium text-dark dark:bg-neutral-700/30 dark:text-white'
              : ''
          )}
          data-sveltekit-preload-data>全部</a
        >
        <!-- Order alfabetically: -->
        {#each categories.sort() as category}
          <a
            href={`/directory/${category.toLowerCase()}`}
            data-sveltekit-preload-data
            class={cn(
              sidebarItemStyles,
              data.pathname === `/directory/${category.toLowerCase()}`
                ? 'bg-neutral-200 font-medium text-dark dark:bg-neutral-700/30 dark:text-white'
                : ''
            )}
          >
            <span>{category}</span>
            <span
              class={cn(
                sidebarCategoryCountStyles,
                data.pathname === `/directory/${category.toLowerCase()}`
                  ? 'border-neutral-300 dark:border-neutral-700'
                  : '',
                'hidden font-mono text-xs md:inline'
              )}
              >{categoryCounts[category]}</span
            >
          </a>
        {/each}
      </nav>
      <div
        class="mb-[30px] flex flex-col items-center gap-1.5 px-6 py-4 md:px-0"
      >
        <a
          href="https://xiaobot.net/p/DesignStroll?refer=716d310a-b4f6-4948-be9c-fae68715e1c4"
          target="_blank"
          rel="noopener noreferrer"
          class={cn(
            sidebarItemStyles,
            'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
            'group transition-colors'
          )}
        >
          设计漫步周刊
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            class="ml-1 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
          />
        </a>
        <a
          href="https://www.figma.com/community/plugin/1427264808426368845/magic-text"
          target="_blank"
          rel="noopener noreferrer"
          class={cn(
            sidebarItemStyles,
            'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
            'group transition-colors'
          )}
        >
          MagicText
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            class="ml-1 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
          />
        </a>
        <a
          href="https://xiaobot.osguider.com/"
          target="_blank"
          rel="noopener noreferrer"
          class={cn(
            sidebarItemStyles,
            'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
            'group transition-colors'
          )}
        >
          小报童排行榜
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            class="ml-1 transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
          />
        </a>
        <div
          id="statistic"
          class={cn(
            sidebarItemStyles,
            'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
            'group transition-colors'
          )}
        >
          <div class="content">
            {#if loading}
              <div><span>加载中...</span></div>
            {:else if visitorCount}
              <div><span>网站总访问量: </span><span class="num">{visitorCount}</span></div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </aside>
  <div class="ml-0 pb-6 md:ml-56">
    <Warning />
    <Transition pathname={data.pathname}>
      <slot />
    </Transition>
    <Toaster
      position="bottom-right"
      theme={$mode}
      class="toaster group"
      toastOptions={{
        classes: {
          toast: 'group toast dark:group-[.toaster]:bg-neutral-900 group-[.toaster]:font-sans',
          description: 'group-[.toast]:text-xs font-mono'
        }
      }}
    />
  </div>
</main>
