// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: ' https://tjsgh1217.github.io/development-blog',
  base: '/development-blog',
});
