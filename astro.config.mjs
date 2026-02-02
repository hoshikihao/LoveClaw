// @ts-check
import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Required for sitemap + canonical URLs
  site: 'https://claw.hoshikihao.com',
  integrations: [
    sitemap(),
    // rss() is used via src/pages/rss.xml.js, but keeping it installed is fine
  ],
});
