---
title: 'Astro Site를 GitHub Pages에 배포'
description: 'Deploy using GitHub Pages with Astro'
pubDate: '2024.11.11'
---

**Astro site를 GitHub Pages에 배포하는 방법에 대해 알아보겠습니다.**

`astro.config.mjs` 의 defineConfig 함수 안에 아래의 코드를 넣어줍니다.

<div class="terminal">
site: 'https://username.github.io'
</div>

<br>
여기서 username은 GitHub 계정의 username을 의미합니다.

위 site 도메인으로 당신의 웹사이트에 진입할 수 있습니다.

`.github/workflows/deploy.yml` 경로에 새 파일을 만들고 아래 코드를 붙여넣습니다.

<div class="terminal">
name: Deploy to GitHub Pages

on:  
push:
branches: [ main ]  
workflow_dispatch:

permissions:  
contents: read  
pages: write  
id-token: write

jobs:  
build:  
runs-on: ubuntu-latest  
steps:  
\- name: Checkout your repository using git  
uses: actions/checkout@v4  
\- name: Install, build, and upload your site  
uses: withastro/action@v3

deploy:  
needs: build  
runs-on: ubuntu-latest  
environment:  
 name: github-pages  
 url: ${{ steps.deployment.outputs.page_url }}  
steps:  
 \- name: Deploy to GitHub Pages  
 id: deployment  
 uses: actions/deploy-pages@v4

</div>

GitHub Repository를 생성합니다.

사용할 GitHub Repository 이름을 **username.githhub.io** 형식으로 생성합니다.

**github.io** 는 GitHub Pages를 사용해 정적 웹사이트를 배포할 수 있는 플랫폼입니다.

GitHub Repository를 생성한 후 우리는 해당 Repository의 **GitHub Actions** 을 활성화 해야 합니다.

배포할 GitHub Repository의 `Setting -> Pages -> Build and deployment` 의 source 값을 **GitHub Actions** 로 바꿔줍니다.

이제 당신의 Astro Project가 **GitHub Pages** 를 통해 배포되고 있습니다.

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
