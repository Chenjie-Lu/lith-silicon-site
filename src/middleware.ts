import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (event, next) => {
  const response = await next();
  response.headers.set('Content-Type', 'text/html; charset=utf-8');
  return response;
});
