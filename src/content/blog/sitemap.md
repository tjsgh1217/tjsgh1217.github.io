---
title: 'Google Search Console을 이용해 Astro에 sitemap을 연결하는 방법'
description: 'Connect your sitemap to Astro using Google Search Console.'
pubDate: '2024.11.12'
---

**Astro Project를 Sitemap에 연결하는 방법을 알아보겠습니다.**

- **사이트맵(Sitemap)** 은 웹사이트 구조를 검색 엔진에 알려주는 XML 형식의 파일입니다.
- 이 파일은 웹사이트에 있는 모든 페이지, 각 페이지의 메타데이터를 포함하고 있습니다.

<br>
터미널에서 아래의 명령어를 실행합니다.

<div class="terminal">
npx astro add sitemap
</div>

<br>
astro 에러가 발생할 시 아래 명령어로 수동 설치 해줍니다.

<div class="terminal">
npm install @astrojs.sitemap
</div>

<br>

설치가 완료되면 `astro.config.mjs` 파일에 아래 코드가 생성된 것을 볼 수 있습니다.

<div class="terminal">
import sitemap from '@astrojs/sitemap';

. . .

integrations: [sitemap()]

</div>

- **@astrojs/sitemap**을 생성하려면 배포된 URL을 알아야 합니다.

- Sitemap 설치로 `sitemap-index.xml` 파일과 `sitemap-0.xml`  
  파일이 생성되었습니다.

- `sitemap-index.xml` 파일의 경로가 `sitemap-0.xml` 로 향하므로 우리는 `sitemap-index.xml` 로 링크를 해줍니다.

링크는 `src/layouts/Layout.astro` 에 파일을 생성해 아래 코드를 붙여넣기  
 해줍니다.

<div class="terminal">
  &lt;link rel="sitemap" href="/sitemap-index.xml" /&gt;
</div>

- 크롤러를 돕기 위해 robots.txt에 /sitemap-index.xml 을 추가해줍니다.

<br>

`public/robots.txt` 파일에 아래의 코드를 작성합니다.

<div class="terminal">
Sitemap: https://SITE/sitemap-index.xml
</div>

<br>

SITE에 `astro.config.mjs` 파일에 작성한 site 도메인 값을 넣어줍니다.

`src/pages/robots.txt.ts` 파일을 생성한 후 아래의 코드를 붙여넣기 합니다.

<div class="terminal">
import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `  
User-agent: \*  
Allow: /

Sitemap: ${sitemapURL.href}  
`;

export const GET: APIRoute = ({ site }) => {  
 const sitemapURL = new URL('sitemap-index.xml', site);  
 return new Response(getRobotsTxt(sitemapURL));  
};

</div>

- 이제 **Google Search Console**에 접속합니다.

- 속성 유형은 **URL 접두어**를 선택하고 당신의 site 도메인을 입력 후 계속합니다.

- 소유권 확인은 **HTML태그 (사이트 홈페이지에 메타태그 추가)** 를 선택합니다.

- 메타태그를 복사한 후 `src/pages/index.astro` 파일의  
  &lt;**head**&gt; 태그에 붙여넣기 합니다.

- 다시 Google Search Console로 돌아가 확인을 눌러 완료합니다.

- 소유권이 확인되었으면 좌측 Sitemaps 리스트에 들어가 새 사이트맵을 추가합니다.

- 사이트맵 URL은 `https://<SITE>.github.io/sitemap-index.xml` 로  
  제출합니다.

- 전과 같이 SITE에 `astro.config.mjs` 파일에 작성한 site 도메인 값을 넣어줍니다.

제출된 사이트맵 상태가 성공으로 바뀌면 등록이 완료됩니다.

---

<style>
h1 {
    font-size: 2em;
    margin-bottom: 20px;
}


.terminal {
    background-color: #2d2d2d; 
    color: #ffffff; 
    padding: 15px 10px 10px 20px;
    border-radius: 5px;
    font-family: 'Courier New', monospace;
    font-size: 17px;
    line-height: 1.2;
    overflow-x: auto;
    margin: 15px 0;
}
</style>

<script src="https://utteranc.es/client.js"
        repo="tjsgh1217/tjsgh1217.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
