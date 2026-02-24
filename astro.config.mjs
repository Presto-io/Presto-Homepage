// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  vite: {
    plugins: [{
      name: 'showcase-rewrite',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          // Rewrite /showcase/xxx to /showcase/xxx.html for dev server
          if (req.url?.match(/^\/showcase\/[\w-]+$/)) {
            req.url = req.url + '.html';
          }
          next();
        });
      }
    }]
  }
});