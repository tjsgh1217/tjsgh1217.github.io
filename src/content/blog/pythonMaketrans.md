---
title: 'Python (maketrans & translate)'
description: 'algorithm'
pubDate: '2025.03.20'
---

#### maketrans()

- maketrans()로 문자 변환 규칙을 생성

```python
str.maketrans(x, y)

# x: 변환할 문자들
# y: 변환될 문자들
```

<br>

#### translate()

- translate()로 문자열에 변환 규칙을 적용

```python
str.translate(table)

# table: maketrans()에서 만든 변환 테이블을 전달받음
```

<br>

<br>

---

<br>

<br>

```python
table = str.maketrans("abc", "123")    # 문자 변환 테이블 생성

text = "abc apple"
result = text.translate(table)         # 문자열에 변환 규칙 적용

print(result)  # "123 1pple"
```

<br>

<br>

```python
table = str.maketrans("", "", "aeiou")  # 문자 삭제 테이블 생성

text = "hello world"
result = text.translate(table)          # 문자열에 변환 규칙 적용

print(result)  # "hll wrld"
```

<br>

<br>

```python
table = str.maketrans("abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
# 대소문자 변환 테이블 생성

text = "hello world"
result = text.translate(table)    # 문자열에 변환 규칙 적용

print(result)  # "HELLO WORLD"
```

<br>

---

<style>
  h1 {
      font-size: 1.8em;
      margin-bottom: 20px;
      color: #34495E;
      }
</style>

<script src="https://utteranc.es/client.js"
        repo="tjsgh1217/tjsgh1217.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
