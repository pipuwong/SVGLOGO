<script lang="ts">
  import { cn } from '@/utils/cn';
  import { ArrowUpRight, Calendar, Sparkles, Users, Zap } from 'lucide-svelte';
  import { badgeStyles, buttonStyles } from '@/ui/styles';
  
  // 导入真实的SVG数据
  import { svgs } from '@/data/svgs';
  
  // 获取最新的8个图标 - 从数组末尾取（假设最新的在后面）
  const recentUpdates = svgs.slice(-16).reverse().map((svg, index) => {
    // 处理route字段，支持ThemeOptions类型
    const getImagePath = (route) => {
      if (typeof route === 'string') {
        return route;
      } else if (route && typeof route === 'object' && route.light) {
        return route.light; // 默认使用light主题
      }
      return '/library/default.svg'; // fallback
    };
    
    // 处理category字段，支持数组类型
    const getCategory = (category) => {
      if (Array.isArray(category)) {
        return category[0]; // 取第一个分类
      }
      return category;
    };
    
    return {
      id: index + 1,
      title: svg.title,
      category: getCategory(svg.category),
      image: getImagePath(svg.route),
      url: svg.url
    };
  });
  
  const blogPosts = [
    {
      id: 1,
      title: '如何选择合适的矢量LOGO格式',
      excerpt: '深入了解SVG、AI、EPS等矢量格式的特点和应用场景，帮助设计师做出最佳选择。',
      date: '2024.08.25',
      readTime: '5 min'
    },
    {
      id: 2,
      title: '国内品牌LOGO设计趋势分析',
      excerpt: '分析近年来国内知名品牌LOGO的设计变化，探讨简约化、扁平化的设计趋势。',
      date: '2024.08.20',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'SVGLOGO网站更新日志',
      excerpt: '记录网站功能更新、新增图标和用户体验优化的详细信息。',
      date: '2024.08.15',
      readTime: '3 min'
    }
  ];
</script>

<svelte:head>
  <title>SVGLOGO - 专注收录国内矢量LOGO</title>
  <meta name="description" content="免费下载矢量LOGO素材，专注收录国内矢量LOGO，为设计师提供高质量的品牌标识资源。" />
</svelte:head>

<!-- Hero Section - 保持全宽 -->
<section class="bg-white dark:bg-neutral-900 bg-[url('/images/hero-pattern_light.svg')] dark:bg-[url('/images/hero-pattern_dark.svg')]">
  <div class="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24 z-10 relative">
    <div class="flex items-center justify-center mb-6">
      <span class={cn(badgeStyles, 'text-sm')}>
        <Sparkles size={14} class="mr-1.5" />
        专注国内矢量LOGO收录
      </span>
    </div>
    
    <h1 class="mb-6 text-5xl font-bold tracking-tight leading-none text-neutral-900 md:text-6xl lg:text-7xl dark:text-white">
      SVGLOGO
    </h1>
    
    <p class="mb-8 text-xl font-normal text-neutral-600 lg:text-2xl sm:px-16 lg:px-48 dark:text-neutral-300 text-balance">
      免费下载矢量LOGO素材，专注收录国内矢量LOGO
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="/" class={cn(buttonStyles, 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100')}>
        <span>开始探索</span>
        <ArrowUpRight size={16} />
      </a>
      <a href="/about" class={buttonStyles}>
        <Users size={16} />
        <span>了解更多</span>
      </a>
    </div>
  </div>
</section>

<!-- 替换 Container 组件为原生div -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- About Section -->
  <section class="py-12">
    <div class="max-w-4xl mx-auto text-center">
      <div class="grid md:grid-cols-3 gap-8 mt-0">
        <div class="text-center">
          <div class="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap size={24} class="text-neutral-600 dark:text-neutral-400" />
          </div>
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">高质量资源</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            精心收录国内知名品牌的矢量LOGO，确保每个图标都具备专业品质和清晰度。
          </p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={24} class="text-neutral-600 dark:text-neutral-400" />
          </div>
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">免费使用</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            所有LOGO资源完全免费下载使用，为设计师和开发者提供便捷的素材获取渠道。
          </p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles size={24} class="text-neutral-600 dark:text-neutral-400" />
          </div>
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">持续更新</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            定期更新和新增LOGO资源，跟上品牌发展和设计趋势的最新变化。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Recent Updates Section -->
  <section class="py-16 border-t border-neutral-200 dark:border-neutral-800">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white">
          最近更新
        </h2>
        <a href="/" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm flex items-center whitespace-nowrap">
          查看全部
          <ArrowUpRight size={16} class="ml-1" />
        </a>
      </div>
      
      <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
        {#each recentUpdates as update}
          <a 
            href={update.url || '/'} 
            target="_blank" 
            rel="noopener noreferrer"
            class="group block aspect-square p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-200"
            title={update.title}
          >
            <div class="w-full h-full flex items-center justify-center">
              <img 
                src={update.image} 
                alt={update.title} 
                class="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200" 
                onerror="this.style.display='none'" 
              />
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section class="py-16 border-t border-neutral-200 dark:border-neutral-800">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold text-neutral-900 dark:text-white">
          博客
        </h2>
        <a href="/blog" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm flex items-center whitespace-nowrap">
          查看全部文章
          <ArrowUpRight size={16} class="ml-1" />
        </a>
      </div>
      
      <!-- 三列卡片布局 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each blogPosts as post}
          <article class="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
            <!-- 标题和日期 -->
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors mb-3 line-clamp-2">
                {post.title}
              </h3>
              <div class="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                <span class="flex items-center">
                  <Calendar size={14} class="mr-1.5" />
                  {post.date}
                </span>
                <span class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full text-xs">
                  {post.readTime}
                </span>
              </div>
            </div>
            
            <!-- 摘要 -->
            <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm flex-grow line-clamp-3">
              {post.excerpt}
            </p>
            
            <!-- 阅读更多按钮 -->
            <div class="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <button class="text-neutral-900 dark:text-white text-sm font-medium hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors flex items-center group/btn whitespace-nowrap">
                阅读更多
                <ArrowUpRight size={14} class="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
</div>

<!-- Footer - 保持全宽背景 -->
<footer class="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mt-16">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <!-- 品牌信息区域 -->
      <div class="lg:col-span-2 text-center lg:text-left">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-4">SVGLOGO</h3>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 max-w-md mx-auto lg:mx-0 whitespace-nowrap">
          专注收录国内矢量LOGO，为设计师和开发者提供高质量的品牌标识资源。
        </p>
        <div class="flex justify-center lg:justify-start space-x-4">
          <a href="https://github.com/HeyHuazi/SVGLOGO" target="_blank" rel="noopener noreferrer" 
             class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
            <span class="sr-only">GitHub</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- 友链区域 - 两列布局，中小屏幕居中 -->
      <div class="text-center lg:text-left">
        <h4 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4">友链</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2 max-w-xs mx-auto lg:max-w-none lg:mx-0">
          <div class="space-y-2 text-sm">
            <div><a href="https://designstroll.space/" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">设计漫步</a></div>
            <div><a href="https://www.yanyi.pro/" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">言意</a></div>
            <div><a href="https://xiaobot.osguider.com/" target="_blank" rel="noopener noreferrer" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">小报童排行榜</a></div>
          </div>
          <div class="space-y-2 text-sm">
            <div><a href="https://osguider.com/blog/" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">开源服务指南</a></div>
            <div><a href="https://tagly.notion.site/" target="_blank" rel="noopener noreferrer" class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">全网漫游指南</a></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 版权信息 -->
    <div class="border-t border-neutral-200 dark:border-neutral-800 mt-8 lg:mt-12 pt-8 text-center">
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        © 2024 SVGLOGO. Made with ❤️ by 
        <a href="https://huazi.space/" target="_blank" rel="noopener noreferrer" class="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">@Huazi</a>
      </p>
    </div>
  </div>
</footer>