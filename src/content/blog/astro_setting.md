---
title: 'Astro로 Blog 만들기'
description: 'Create a blog with Astro'
pubDate: '2024.11.9'
---

**Astro로 블로그 만드는 방법에 대해서 알아보겠습니다.**

Astro를 다운받기 위해서 npm이 필요하니 Node.js를 다운로드 합니다.  
(yarn으로 가능합니다.)  
[Node.js 다운로드](https://nodejs.org/en/)

<br>
다운로드가 끝나면 적용이 되었는지 확인합니다. (node version 확인)

<div class="terminal">
  node -v
</div>

<br>
npm 명령어를 이용해 프로젝트를 생성합니다.

<div class="terminal">
  npm create astro@latest
</div>
<br>
아래 문구가 나오면 프로젝트 directory 이름을 지정해줍니다.  
ex) ./Astro_Blog

<div class="terminal">
Where should we create your new project?
</div>

<br>
공유된 무료 템플릿을 사용하거나 Astro에서 제공하는 기본 템플릿을 사용하는 것을  
묻는 문구입니다. 저희는 기본 템플릿을 사용하여 진행하겠습니다.  (Empty)

[Astro 무료 템플릿](https://astro.build/themes/)

<div class="terminal">

○ Include sample files (recommended)

○ Use blog template

○ Empty

</div>

<br>
TypeScript 사용 유무를 묻는 문구입니다.

<div class="terminal">
Do you plan to write TypeScript?  
n
</div>

<br>
프로젝트 동작을 위해 의존성을 설치하는 문구입니다.

<div class="terminal">
  Install dependencies?  
  y
</div>

<br>
git 저장소 설치를 묻는 문구입니다.  
git command를 사용하니 설치해줍니다.

<div class="terminal">
  Initialize a new git repository?  
  y
</div>

<br>
VS Code에서 설치한 프로젝트를 열어줍니다.
프로젝트 파일을 웹사이트에서 개발 모드로 보려면 아래 명령어를 입력해줍니다.

<div class="terminal">
  npm run dev
</div>

<br>

- 웹사이트 미리 보기는 `localhost:4321` 로 접속하여 볼 수 있습니다.
- (Empty)로 시작한 프로젝트는 빈 창에 Astro 문구만 볼 수 있습니다.

- Astro 문구를 변경하기 위해서는 `src/pages/index.astro` 파일로 이동해서  
  &lt;**body**&gt; 태그의 &lt;**h1**&gt;을 수정해주면 변경 가능합니다.

이상으로 Astro를 이용해 개발 환경 구성하기를 마치겠습니다.

---

<style>
  body {
    font-family: 'Arial', sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    color: #333;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #34495E;
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
