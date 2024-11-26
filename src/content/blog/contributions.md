---
title: 'GitHub contributions commit 에러 해결방법'
description: 'GitHub contributions commit Error solutaion'
pubDate: '2024.11.15'
---

Local 개발 환경에서 GitHub에 **Commit/Push**를 해도 **GitHub contributions**의 그래프에  
**commit**이 반영되지 않는 현상의 해결 방법에 대해 알아보겠습니다.

해결방안은 다음과 같습니다.

- **commit** 할 때 사용하는 **Local Repository**의 이메일 주소가 **GitHub 계정**의  
  이메일 주소와 같아야 합니다.
- 이메일 주소는 **GitHub 계정**의 **Primary** 이메일로 지정합니다.

- **Local Repository** 의 사용자명이 **GitHub 계정**의
  사용자명과 같아야 합니다.

<br>

현재 설정되어 있는 `user.email` 과 `user.name` 을 확인하기 위해 아래의 명령어를 입력해줍니다.

<div class="terminal">
git config --li
</div>

- 우리는 Local 환경의 `defaultbranch`, `user.email`, `user.name` 등  
  Git 설정 파일에 항목들을 확인할 수 있습니다.

`user.email` 과 `user.name` 을 확인 한 후 GitHub 계정의 **사용자명**과 **이메일**로  
 변경해줍니다. 아래의 명령어로 변경합니다.

`user.email` 과 `user.name` 이 등록되어 있지 않아도 아래의 명령어로 등록합니다.

<div class="terminal">

git config --global user.email

[GitHub user.email]

git config --global user.name

[GitHub user.name]

</div>

`--global` 은 Git 설정을 전역으로 지정할 때 사용하는 명령어입니다.

<br>
변경 후 다시 아래의 명령어로 변경사항을 확인합니다.

<div class="terminal">
git config -li
</div>
 <br>
이상으로 GitHub contributions commit 에러 해결 방법에 대해 알아보았습니다.

---

<style>
h1 {
    font-size: 1.8em;
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

<script
  src="https://utteranc.es/client.js"
  repo="tjsgh1217/tjsgh1217.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
