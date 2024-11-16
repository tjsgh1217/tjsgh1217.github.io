---
title: 'Astro-utterances 기능 구현'
description: 'Astro comment'
pubDate: '2024.11.14'
---

**Astro Blog에 코멘트 기능을 구현하는 방법을 알아보겠습니다.**

저는 **utterances** 를 이용해서 코멘트 기능을 구현해보겠습니다.

- **utterances**
  - GitHub Issues를 이용하여 댓글 기능을 구현하는 서비스입니다.
  - GibHub 계정을 이용해 댓글을 작성합니다.
  - 해당 댓글은 GitHub Repository의 Issues에 자동 반영됩니다.

**utterances** 서비스는 GitHub Repository가 **Public** 이여야 가능합니다.

- 아래의 사이트에서 **utterances** 를 install 합니다.

[utterances Install](https://github.com/apps/utterances)

- 저는 하나의 Repository 에 적용할 것이니 **Only Select Repository** 를 선택합니다.

- **repo** 는 Astro Project에 해당하는 GitHub Repository를 작성합니다.

`username/github.io`

- Issue title contains page pathname 을 선택합니다.

  - 이 옵션은 페이지의 고유한 (URL or pathname)를 이슈 제목으로 사용하여 댓글을 관리합니다.

  - 페이지마다 고유한 Issues 가 생성되어 각 페이지의 댓글을 독립적으로 관리할 수 있습니다.

- 다음으로 Theme를 설정할 수 있습니다. 저는 라이트 모드로 하겠습니다.

- 테마를 설정 후 아래 있는 Enable Utterances 코드를 복사합니다.

<div class="terminal">

&lt;script  
src="http<hi>s://utteranc.es/client.js"  
repo="username/username.github.io"  
issue-term="pathname"  
theme="github-light"  
crossorigin="anonymous"  
async &gt;  
&lt;/script&gt;

</div>

- **username** 에 본인의 GitHub username 을 작성합니다.

- 수정한 코드를 comment 기능 구현이 필요한 페이지 아래 붙여넣기 하면 됩니다.

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

<script
  src="https://utteranc.es/client.js"
  repo="tjsgh1217/tjsgh1217.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
