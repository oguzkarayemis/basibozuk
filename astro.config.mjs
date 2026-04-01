import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://www.basibozukyayincilik.org',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      assetsDir: 'assets'
    }
  }
});
