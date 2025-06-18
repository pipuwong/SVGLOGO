import { error } from '@sveltejs/kit';
import { getPostBySlug } from '@/data/blogs';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    throw error(404, '文章未找到');
  }
  
  return {
    post,
    content: post.content,
    meta: post.metadata || {}
  };
};