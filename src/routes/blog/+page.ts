import { getBlogPosts } from '@/data/blogs';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const posts = await getBlogPosts();
  
  return {
    posts
  };
};