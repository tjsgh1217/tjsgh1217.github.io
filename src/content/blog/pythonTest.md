---
title: 'Python Solution'
description: 'algorithm'
pubDate: '2025.03.08'
---

<table>
  <tbody>
    <tr>
      <td><code>enumerate()</code></td>
      <td>반복문에서 인덱스와 값을 함께 반환</td>
    </tr>
  </tbody>
</table>

<br>

```python
arr = ['A','b','C','d']

def solution(arr):
    for idx, i in enumerate(arr):
        if idx % 2 != 0:  # 홀수 인덱스일 경우
            arr[idx] = i.upper()  # 대문자로 변환
        else:  # 짝수 인덱스일 경우
            arr[idx] = i.lower()  # 소문자로 변환
    return arr

# ['a','B','c','D']
```

<br>

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
