// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly', // 페이지 업데이트 빈도
      priority: 0.5, // 페이지 우선순위
      // exclude: ['/exclude-page'],  // 사이트맵에 제외할 페이지
      robots: true, // robots.txt 파일 자동 생성
      sitemapBaseFile: '/sitemap.xml', // 사이트맵 파일 기본 경로
    }),
  ],
  site: ' https://tjsgh1217.github.io',
  // base: '/development-blog',
});
