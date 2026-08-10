import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (event, next) => {
  const response = await next();
  // Only set charset for HTML pages, not for static assets
  if (response.headers.get('content-type')?.includes('text/html')) {
    response.headers.set('Content-Type', 'text/html; charset=utf-8');
  }
  return response;
});
