// @ts-check
import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Required for sitemap + canonical URLs
  site: 'https://claw.hoshikihao.com',
  markdown: {
    // Better code highlighting out of the box
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  integrations: [
    sitemap(),
    // rss() is used via src/pages/rss.xml.js, but keeping it installed is fine
  ],
});
