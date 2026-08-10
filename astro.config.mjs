import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lith-silicon.vercel.app',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'set-content-type',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            next();
          });
        },
      },
    ],
  },
});
