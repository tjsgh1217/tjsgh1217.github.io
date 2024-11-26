---
title: '로컬 저장소와 원격 저장소 연결하는 방법'
description: 'local repository-remote repository connection'
pubDate: '2024.11.10'
---

**Local Repostiory - GitHub Repostiory 연결하는 방법을 알아보겠습니다.**

- **Local Repostiory(로컬 저장소)** 는 개발자의 컴퓨터에 저장되는 git 저장소입니다.
- **GitHub Repostiory(원격 저장소)** 는 GitHub 저장소이며 개발자가 로컬 저장소에서 작업한
  파일을 공유하고 협업할 수 있는 공간입니다.

<br/>
터미널에서 연결하고자 하는 프로젝트로 이동합니다.

<br>
이동 후 git을 초기화(생성) 해줍니다.

<div class="terminal">
git init
</div>

<br>
GitHub Repository를 생성 후 생성된 Repository의 주소를 복사합니다.

git remote add 명령어로 새로운 원격 저장소를 추가합니다.

<div class="terminal">
git remote add origin [GitHub 주소]
</div>

<br>
fetch, push 주소가 같은지 확인합니다.

branch(main) 주소가 같은지 확인합니다.

<div class="terminal">
git remote -v
</div>

<br>
git pull 명령어로 GitHub Repository를 Local Repository와 병합해줍니다.

`main` 은 default branch입니다.

<div class="terminal">
git pull origin main
</div>

<br>
git add 명령어로 GitHub Repository에 올릴 파일을 추가해줍니다.

`.` 은 모든 변경사항을 의미합니다.  
원하는 파일만 올릴 시 `파일명` 으로 하면 됩니다.

<div class="terminal">
git add .
</div>

<br>
git commit 명령어로 변경된 사항을 간단한 메세지로 표기한 후 커밋합니다.

`""` 기호 사이에 메세지를 작성하시면 됩니다.

<div class="terminal">
git commit -m ""
</div>

<br>
git push 명령어로 GitHub Repository에 변경사항을 업로드합니다.

`origin` GitHub(원격 저장소)의 위치를 가리키는 이름입니다.  
`-u` upstream branch로 로컬 브랜치(main)과 원격 브랜치(branch)를 연결합니다.  
첫 push에만 사용합니다. 이후에는 `git push origin main` 으로 가능합니다.

<div class="terminal">
git push -u origin main
</div>

<br>
git push 에러가 발생하면 아래 명령어로 진행합니다.

원격 저장소로 <span style="color: red; font-weight: bold;">강제</span> push 하는 코드이기에 pull 하지 않은 변경사항은 <span style="color: red; font-weight: bold;">삭제</span>됩니다.

<div class="terminal">
git push origin +main
</div>

이상으로 Local Repostiory - GitHub Repostiory 연결하기를 마치겠습니다.

---

<style>
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

<script
  src="https://utteranc.es/client.js"
  repo="tjsgh1217/tjsgh1217.github.io"
  issue-term="pathname"
  theme="github-light"
  crossorigin="anonymous"
  async
></script>
