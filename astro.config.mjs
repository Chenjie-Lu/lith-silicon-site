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
        name: 'fix-svg-content-type',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.endsWith('.svg')) {
              res.setHeader('Content-Type', 'image/svg+xml');
            }
            next();
          });
        },
      },
    ],
  },
});
