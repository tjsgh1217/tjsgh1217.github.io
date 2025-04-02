---
title: 'Astro-Google Analytics 연결하는 방법'
description: 'Astro Google Analytics'
pubDate: '2024.11.13'
---

**Astro 웹사이트에 Google Analytics 를 연결하는 방법에 대해서 알아보겠습니다.**

**Google Analytics** 는 웹사이트의 방문자 데이터를 분석하고 트래픽 정보를 제공하는 도구입니다.
웹사이트 방문자의 방문 경로, 페이지 조회 수 등 다양한 정보를 수집할 수 있습니다.

  <br>

- **Google Analytics** 계정을 생성합니다.

- 속성 설정 및 비즈니스 정보를 등록합니다.

- 약관 동의 후 **Google Analytics** 설정 화면에 플랫폼을 **웹** 으로 선택합니다.

- 웹사이트 URL에 블로그의 URL을 넣습니다.

`username.github.io`

- 스트림 이름에 블로그명을 작성합니다.

- 스트림 만들기를 누릅니다.

- 스트림이 생성되면 스트림 세부정보에서 **측정 ID** 값을 복사합니다.

`src/google_analytics` 에 파일을 생성 해 아래 코드를 붙여넣기합니다.

```
&lt;script
 is:isline
 async
 src="http<hi>s://ww<hi>w.googletagmanager.com/gtag/js?id=VALUE"&gt;
&lt;/script&gt;

&lt;script is:inline>
 window.dataLayer = window.dataLayer || [];
 function gtag() {
 dataLayer.push(arguments);
 }
gtag('js', new Date());
 gtag('config', 'VALUE');
&lt;/script&gt;
```

- **VALUE** 값에 개인의 ID 값을 대입합니다.

- Google Analytics로 돌아가 적용을 누릅니다.

- 혹시 웹사이트를 인식하지 못하면 `src/pages/index.astro` 파일의
  &lt;**head**&gt;  
  태그 안에 붙여넣기 하시면 됩니다.

이상으로 Google Analytics 연결하는 방법을 마치겠습니다.

---

<style>
h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #34495E;
}


</style>

<script
  src="https://utteranc.es/client.js"
  repo="tjsgh1217/tjsgh1217.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
