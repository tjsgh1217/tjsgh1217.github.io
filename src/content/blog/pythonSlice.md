---
title: 'Python Slice (슬라이스) 정리'
description: 'algorithm'
pubDate: '2025.03.10'
---

```python
# 리스트 예시
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 인덱스 2부터 5까지 (5 제외)
print(my_list[2:5])  # 출력: [2, 3, 4]

# 문자열 예시
text = "파이썬 슬라이싱"
print(text[0:3])  # "파이썬"
```

<br>

<br>

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 처음부터 5까지
print(my_list[:5])  # [0, 1, 2, 3, 4]

# 5부터 끝까지
print(my_list[5:])  # [5, 6, 7, 8, 9]

# 전체 시퀀스 (복사본 생성)
print(my_list[:])   # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<br>

<br>

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 처음부터 끝까지 2칸 간격으로
print(my_list[::2])    # [0, 2, 4, 6, 8]

# 인덱스 1부터 8까지 2칸 간격으로
print(my_list[1:8:2])  # [1, 3, 5, 7]

# 3칸 간격
text = "파이썬 슬라이싱 예제"
print(text[::3])       # "파 이 예"

# 파(0) 이(1) 썬(2)  (3) 슬(4) 라(5) 이(6) 싱(7)  (8) 예(9) 제(10)
```

<br>

<br>

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 뒤에서 5번째부터 뒤에서 2번째까지
print(my_list[-5:-1])  # [5, 6, 7, 8]

# 뒤에서 3번째 요소
print(my_list[-3])     # 7

#  0   1   2   3   4   5   6   7   8   9   (양수 인덱스)
# -10 -9  -8  -7  -6  -5  -4  -3  -2  -1   (음수 인덱스)
```

<br>

<br>

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 역순으로 전체 리스트
print(my_list[::-1])    # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# 인덱스 8부터 3까지 역순으로
print(my_list[8:2:-1])  # [8, 7, 6, 5, 4, 3]

# 문자열 뒤집기
text = "파이썬"
print(text[::-1])       # "썬이파"
```

<br>

<br>

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 짝수 인덱스만
print(my_list[::2])   # [0, 2, 4, 6, 8]

# 홀수 인덱스만
print(my_list[1::2])  # [1, 3, 5, 7, 9]
```

<br>

<br>

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 인덱스 2~5까지를 새로운 값으로 바꾸기
my_list[2:6] = ['A', 'B', 'C', 'D']
print(my_list)  # [0, 1, 'A', 'B', 'C', 'D', 6, 7, 8, 9]

# 홀수 인덱스만 0으로 변경
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
my_list[1::2] = [0, 0, 0, 0, 0]
print(my_list)  # [0, 0, 2, 0, 4, 0, 6, 0, 8, 0]
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
