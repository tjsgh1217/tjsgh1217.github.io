---
title: 'Coding Test Summary (Python)'
description: 'algorithm'
pubDate: '2025.03.06'
---

#### LV.0

<br>

- <span style="color:red; font-weight:bold;" >int ( )</span>  
  숫자나 문자열을 정수로 변환함.

```python
# 숫자 변환
print(int(3.9))       # 3 (소수점 이하 버림)
print(int("123"))     # 123 (문자열 -> 정수)

# 진법 변환
print(int("1010", 2)) # 10 (2진수 -> 10진수)
print(int("A", 16))   # 10 (16진수 -> 10진수)

# 에러 발생
# print(int("hello"))  # ValueError 발생
```

<br>
<br>

- <span style="color:red; font-weight:bold;" >Number ( )</span>  
  문자열을 숫자형으로 변환

```javascript
Number('123'); // 123
Number('123.45'); // 123.45 (소수점 포함)
Number('abc'); // NaN
```

<br>
<br>

- <span style="color:red; font-weight:bold;" >String ( )</span>  
   숫자를 문자열로 변환

```javascript
String(123); // "123"
String(123.45); // "123.45"
String(true); // "true"
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
</style>

<script src="https://utteranc.es/client.js"
        repo="tjsgh1217/tjsgh1217.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
