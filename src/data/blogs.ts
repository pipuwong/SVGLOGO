export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
//   readTime: string;
  tags: string[];
  published: boolean;
  slug: string;
  content?: any;
  metadata?: any;
}

// 动态获取博客文章列表
export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  try {
    // 使用 Vite 的 glob 导入功能动态获取所有 markdown 文件
    const modules = import.meta.glob('/src/docs/blog/*.md', { eager: false });
    
    for (const path in modules) {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      try {
        const module = await modules[path]() as any;
        const metadata = module.metadata || {};
        
        // 从文件路径和元数据构建博客文章对象
        const post: BlogPost = {
          id: slug,
          slug,
          title: metadata.title || '无标题',
          description: metadata.description || '',
          date: metadata.date || new Date().toISOString().split('T')[0],
          readTime: metadata.readTime || '5 min',
          tags: metadata.tags || [],
          published: metadata.published !== false, // 默认为已发布
          content: module.default,
          metadata
        };
        
        posts.push(post);
      } catch (error) {
        console.warn(`Failed to load blog post: ${path}`, error);
      }
    }
    
    // 按日期排序（最新的在前）
    return posts
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
  } catch (error) {
    console.error('Failed to load blog posts:', error);
    return [];
  }
}

// 根据slug获取博客文章
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const module = await import(`../docs/blog/${slug}.md`);
    const metadata = module.metadata || {};
    
    return {
      id: slug,
      slug,
      title: metadata.title || '无标题',
      description: metadata.description || '',
      date: metadata.date || new Date().toISOString().split('T')[0],
      readTime: metadata.readTime || '5 min',
      tags: metadata.tags || [],
      published: metadata.published !== false,
      content: module.default,
      metadata
    };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}

// 获取最新的N篇文章
export async function getLatestPosts(count: number = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.slice(0, count);
}