import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  // 检查URL参数，如果有view=original则不重定向
  if (url.searchParams.get('view') === 'original') {
    return {};
  }
  
  // 否则重定向到landing页面
  throw redirect(301, '/landing');
};