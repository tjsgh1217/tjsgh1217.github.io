---
title: 'Python 기초 정리'
description: 'algorithm'
pubDate: '2025.03.05'
---

<div id="sidebar">
    <strong class="sidebar-title" style="color:black">목차</strong>
    <ul class="sidebar-list">
        <li><a href="#변수-선언" class="sidebar-link" onclick="scrollToSection(event, '변수-선언')">변수 선언</a></li>
        <li><a href="#함수-정의" class="sidebar-link" onclick="scrollToSection(event, '함수-정의')">함수 정의</a></li>
        <li><a href="#조건문" class="sidebar-link" onclick="scrollToSection(event, '조건문')">조건문</a></li>
        <li><a href="#반복문" class="sidebar-link" onclick="scrollToSection(event, '반복문')">반복문</a></li>
        <li><a href="#리스트" class="sidebar-link" onclick="scrollToSection(event, '리스트')">리스트</a></li>
        <li><a href="#클래스" class="sidebar-link" onclick="scrollToSection(event, '클래스')">클래스</a></li>
    </ul>
</div>

#### 변수 선언

<br>

```python
# 기본 변수 선언
x = 10             # 정수
name = "데브선"      # 문자열
is_dev = True  # 불리언

# 다중 변수 선언
a, b, c = 1, 2, 3  # 동시 선언
x = y = z = 0      # 동일 값 선언

# 타입 변환
int("25")    # 문자열 → 정수
float(10)  # 정수 → 실수
```

<br>
<br>
<br>

<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center; background-color: #f2f2f2; font-weight: bold;">타입</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center; background-color: #f2f2f2; font-weight: bold;">설명</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center; background-color: #f2f2f2; font-weight: bold;">예시</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">int</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">정수</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1, 100, -10</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">float</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">실수</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3.14, -2.5</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">str</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">문자열</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">"Hello"</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">list</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">리스트</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">[1, 2, 3]</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">tuple</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">튜플</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">(1, 2, 3)</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">dict</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">딕셔너리</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{"name": "seon", "age": 25}</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">set</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">집합</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{1, 2, 3}</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">bool</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">참/거짓</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">True, False</td>
        </tr>
    </tbody>
</table>

<br>
<br>

---

<br>
<br>

#### 함수 정의

- <span style="color:red; font-weight:bold;" > 파이썬 함수는 def 키워드로 정의</span>

```python
def 함수이름(매개변수1, 매개변수2 = 기본값):
# 들여쓰기
    실행할_코드
    return 반환값

------------------------------

def add(a, b):
    return a + b

print(add(1, 2))    # 3

------------------------------

def greet(name = "Seon"):
    print(f"Hello, {name}!")
greet()      # Hello, Seon!
greet("Dev") # Hello, Dev!

------------------------------
# 람다 함수
add = lambda a, b: a + b
print(add(1, 2))  # 3
```

<br>
<br>

---

<br>
<br>

#### 조건문

<br>

```python
x = 10

if x > 0:           # if: 조건이 참일 때 실행
    print("양수")
elif x == 0:        # elif: 두 번째 조건
    print("0")
else:               # else: 나머지 경우
    print("음수")

# 삼항 연산자
result = "성인" if age >= 20 else "미성년자"
```

<br>
<br>

---

<br>
<br>

#### 반복문

<br>

```python
#range ()

for i in range(5):
    print(i)  # 0, 1, 2, 3, 4



def solution():
    result = []
    for i in range(5):
        result.append(i)
    return result

print(solution())  # [0, 1, 2, 3, 4]

--------------------------------------

for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5



def solution():
    result = []
    for i in range(1, 6):
        result.append(i)
    return result

print(solution())  # [1, 2, 3, 4, 5]

--------------------------------------

for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8



def solution():
    result = []
    for i in range(0, 10, 2):
        result.append(i)
    return result

print(solution())  # [0, 2, 4, 6, 8]

--------------------------------------

text = "Hello"
for char in text:
    print(char)    # H, e, l, l, o



def solution():
    result = []
    text = "Hello"
    for char in text:
        result.append(char)
    return result

print(solution())  # ['H', 'e', 'l', 'l', 'o']

----------------------------------------------

fruits = ['apple', 'grape', 'cherry']
for fruit in fruits:
    print(fruit)   # apple, grape, cherry



def solution():
    result = []
    fruits = ['apple', 'grape', 'cherry']
    for fruit in fruits:
        result.append(fruit)
    return result

print(solution())  # ['apple', 'grape', 'cherry']

--------------------------------------------------

# 한 줄 반복문
def solution():
    arr = [i for i in range(5)]
    return arr

print(solution())  # [0, 1, 2, 3, 4]
```

<br>
<br>

---

<br>
<br>

#### 리스트

<br>

```python
arr = [1, 2, 3]
arr.append(4)           # 끝에 추가  [1, 2, 3, 4]
arr.pop()               # 마지막 요소 제거 및 반환 [1, 2, 3]
arr.remove(2)           # 값이 2인 첫 번째 항목 제거 [1,3]
arr.sort()              # 오름차순 정렬 [1,3]
arr.reverse()           # 내림차순 정렬 [3,1]
arr.sort(reverse=True)  # 내림차순 정렬 [3.1]

--------------------------------------------------------

numbers = [0, 1, 2, 3, 4, 5]
first_three = numbers[:3]    # [0, 1, 2]
last_two = numbers[-2:]      # [4, 5]
middle = numbers[1:4]        # [1, 2, 3]
```

<br>
<br>

---

<br>
<br>

#### 클래스

```python
class 클래스이름:
    # 클래스 변수 (모든 인스턴스가 공유)
    클래스_변수 = 값

    # 생성자 메서드 (객체 초기화)
    def __init__(self, 매개변수들):
        # 인스턴스 변수 (각 객체마다 고유)
        self.인스턴스_변수 = 매개변수

    # 일반 메서드
    def 메서드_이름(self, 매개변수들):
        # 메서드 내용
        return 값

--------------------------------------

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce_name(self):
        return f"제 이름은 {self.name}입니다."

    def introduce_age(self):
        return f"저는 {self.age}살입니다."

kim = Person("데브선", 25)

print(kim.introduce_name())     # "제 이름은 데브선입니다."
print(kim.introduce_age())      # "저는 25살입니다."
```

---

<style>
  h1 {
      font-size: 1.8em;
      margin-bottom: 20px;
      color: #34495E;

      }
</style>
<style>
    #sidebar {
        position: fixed;
        top: 20%;
        left: 20px;
        width: 170px;
        background: #f9f9f9;
        padding: 5px 5px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
        text-align: center;
        bottom: 34%;
    }

.sidebar-title {
    text-align: center;
    display: block;
    color: #9b59b6;
}

.sidebar-list {
    list-style: none;
    padding: 10px;
    text-align: left;
    margin-top: 0px;
}

.sidebar-link {
    text-decoration: none;
    color: #9b59b6;
    display: block;
    padding: 3px 0;
}

#sidebar:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

html {
        scroll-behavior: smooth;
    }

#변수-선언, #함수-정의, #조건문, #반복문, #리스트, #클래스 {
    scroll-margin-top: 29px;
}

</style>

<script>
function scrollToSection(event, id) {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}
</script>

<script src="https://utteranc.es/client.js"
        repo="tjsgh1217/tjsgh1217.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
