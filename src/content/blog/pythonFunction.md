---
title: 'Python 함수 정리'
description: 'algorithm'
pubDate: '2025.03.06'
---

<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>함수</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
      <tr>
    <td>정수 변환</td>
    <td><code>int()</code></td>
    <td>문자열 또는 실수를 정수로 변환</td>
  </tr>
  <tr>
    <td>문자열 변환</td>
    <td><code>str()</code></td>
    <td>숫자나 객체를 문자열로 변환</td>
  </tr>
  </tbody>
</table>

<br>

<br>

<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>함수</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>최대값</td>
      <td><code>max()</code></td>
      <td>가장 큰 값 반환</td>
    </tr>
    <tr>
      <td>최소값</td>
      <td><code>min()</code></td>
      <td>가장 작은 값 반환</td>
    </tr>
    <tr>
      <td>합계</td>
      <td><code>sum()</code></td>
      <td>리스트나 튜플 합계</td>
    </tr>
    <tr class = "highlight">
      <td>곱셈</td>
      <td><code>prod()</code></td>
      <td>리스트나 튜플의 모든 요소 곱하기</td>
    </tr>
    <tr>
      <td>절대값</td>
      <td><code>abs()</code></td>
      <td>절대값 반환</td>
    </tr>
    <tr>
      <td>제곱</td>
      <td><code>pow(x, y)</code></td>
      <td>x^y 반환</td>
    </tr>
    <tr>
      <td>반올림</td>
      <td><code>round(x)</code></td>
      <td>소수점 반올림</td>
    </tr>
    <tr>
      <td>몫과 나머지</td>
      <td><code>divmod(x, y)</code></td>
      <td>(몫, 나머지) 반환</td>
    </tr>
    <tr>
      <td>타입 확인</td>
      <td><code>type()</code></td>
      <td>데이터 타입 반환</td>
    </tr>
  </tbody>
</table>

<br>

<br>

<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>함수</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr class ="highlight">
      <td>요소 추가</td>
      <td><code>append()</code></td>
      <td>끝에 요소 추가</td>
    </tr>
    <tr>
      <td>요소 삽입</td>
      <td><code>insert()</code></td>
      <td>특정 위치에 요소 추가</td>
    </tr>
    <tr>
      <td>요소 제거</td>
      <td><code>remove()</code></td>
      <td>특정 요소 제거</td>
    </tr>
    <tr>
      <td>요소 제거 & 반환</td>
      <td><code>pop()</code></td>
      <td>마지막 요소 제거하고 반환</td>
    </tr>
    <tr>
      <td>요소 개수 세기</td>
      <td><code>count()</code></td>
      <td>특정 요소 개수 반환</td>
    </tr>
    <tr>
      <td>리스트 확장</td>
      <td><code>extend()</code></td>
      <td>리스트에 여러 요소 추가</td>
    </tr>
    <tr>
      <td>정렬</td>
      <td><code>sort()</code></td>
      <td>오름차순 정렬</td>
    </tr>
    <tr>
      <td>역순 정렬</td>
      <td><code>reverse()</code></td>
      <td>리스트 뒤집기</td>
    </tr>
    <tr>
      <td>깊은 복사</td>
      <td><code>copy()</code></td>
      <td>리스트 복사</td>
    </tr>
  </tbody>
</table>

<br>

<br>

<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>함수</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>대소문자 변경</td>
      <td><code>upper()</code></td>
      <td>대문자로 변환</td>
    </tr>
    <tr>
      <td>대소문자 변경</td>
      <td><code>lower()</code></td>
      <td>소문자로 변환</td>
    </tr>
    <tr class = "highlight">
      <td>길이</td>
      <td><code>len()</code></td>
      <td>문자열 길이 반환</td>
    </tr>
    <tr>
      <td>공백 제거</td>
      <td><code>strip()</code></td>
      <td>문자열의 앞, 뒤 공백 제거</td>
    </tr>
    <tr>
      <td>나누기</td>
      <td><code>split()</code></td>
      <td>특정 구분자로 나누기</td>
    </tr>
    <tr>
      <td>합치기</td>
      <td><code>join()</code></td>
      <td>리스트 문자열 합치기</td>
    </tr>
    <tr>
      <td>치환</td>
      <td><code>replace()</code></td>
      <td>특정 문자열 치환</td>
    </tr>
    <tr>
      <td>찾기</td>
      <td><code>find()</code></td>
      <td>특정 문자 위치 반환</td>
    </tr>
    <tr class ="highlight">
      <td>포함 여부</td>
      <td><code>in</code></td>
      <td>문자열 포함 여부 확인</td>
    </tr>
  </tbody>
</table>

<br>

<br>

<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>함수</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>키 목록</td>
      <td><code>keys()</code></td>
      <td>키 목록 반환</td>
    </tr>
    <tr>
      <td>값 목록</td>
      <td><code>values()</code></td>
      <td>값 목록 반환</td>
    </tr>
    <tr>
      <td>키-값 쌍</td>
      <td><code>items()</code></td>
      <td>(키, 값) 튜플 반환</td>
    </tr>
    <tr>
      <td>요소 추가</td>
      <td><code>update()</code></td>
      <td>키-값 추가</td>
    </tr>
    <tr>
      <td>기본값 반환</td>
      <td><code>get()</code></td>
      <td>키에 해당하는 값 반환</td>
    </tr>
  </tbody>
</table>

<br>

<br>

<table>
  <thead>
    <tr>
      <th>기능</th>
      <th>함수</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>순열</td>
      <td><code>itertools.permutations()</code></td>
      <td>모든 순열 반환</td>
    </tr>
    <tr>
      <td>조합</td>
      <td><code>itertools.combinations()</code></td>
      <td>모든 조합 반환</td>
    </tr>
    <tr>
      <td>중복 순열</td>
      <td><code>itertools.product()</code></td>
      <td>중복 순열 반환</td>
    </tr>
    <tr>
      <td>조합 중복</td>
      <td><code>itertools.combinations_with_replacement()</code></td>
      <td>중복 조합 반환</td>
    </tr>
  </tbody>
</table>

<br>

---

<style>
  h1 {
      font-size: 1.8em;
      margin-bottom: 20px;
      color: #34495E;
      }
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;

  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    text-align: center;
    white-space: nowrap;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  .highlight {
    background-color: #e0f7ff;
  }
</style>

<script src="https://utteranc.es/client.js"
        repo="tjsgh1217/tjsgh1217.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
