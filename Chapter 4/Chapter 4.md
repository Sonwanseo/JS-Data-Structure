# Chapter 4. 자바스크립트 문자열

### 자바스크립트 문자열 기본

자바스크립트의 기본 자료형인 String에는 널리 사용할 수 있는 다양한 문자열 함수가 있다.

##### 문자열 접근

문자에 접근하기 위해 .charAt()을 사용한다.

```javascript
'dog'.charAt(1); // "o"를 반환한다.
```

문자열 접근을 위해 지정된 인덱스 사이의 문자들을 반환하는 .substring(startIndex, endIndex)를 사용할 수 있다.

```javascript
'YouTube'.substring(1, 2); // 'o'를 반환한다.
'YouTube'.substring(3, 7); // 'tube'를 반환한다.
```

두 번째 매개변수를 전달하지 않으면 지정된 시작 위치부터 끝까지의 모든 문자 값들을 반환한다.

```javascript
return 'YouTube'.substring(1); // 'ouTube'를 반환한다.
```

##### 문자열 비교

대부분의 프로그래밍 언어에는 문자열을 비교할 수 있는 함수가 존재한다.  
자바스크립트에서는 미만 연산자와 초과 연산자를 사용해 이를 쉽게 수행할 수 있다.

```javascript
var a = "a";
var b = "b";
console.log(a > b); // 'true'를 출력한다.
```

하지만 다른 길이의 두 문자열을 비교한다면 문자열의 시작부터 비교하기 시작해 더 짧은 길이의 문자열 길이만큼까지 비교한다.

```javascript
var a = 'add';
var b = 'b';
console.log(a < b); // 'true'를 출력한다.

var a = 'add';
var b = 'ab';
console.log(a < b); // 'false'를 출력한다.
```

##### 문자열 검색

문자열 내에 특정 문자열을 찾기 위해 .indexOf(searchValuep, fromIndex])를 사용할 수 있다.  
.indexOf 함수는 검색하고자 하는 문자열을 매개변수로 받는다.  
선택적으로 검색 시작 인덱스를 지정하는 매개변수도 받는다.  
.indexOf 함수는 일치하는 문자열의 위치를 반환하고, 일치하는 문자열을 발견하지 못한 경우 -1이 반환된다.

```javascript
'Red Dragon'.indexOf('Red'); // 0을 반환한다.
'Red Dragon'.indexOf('RedScale'); // -1을 반환한다.
'Red Dragon'.indexOf('Dragon', 0); // 4를 반환한다.
'Red Dragon'.indexOf('Dragon', 4); // 4를 반환한다.
'Red Dragon'.indexOf("", 9); // 9를 반환한다.
```

추가적인 매개변수를 사용해 문자열 검색 시 문자열의 특정 인덱스 이후부터 검색하도록 할 수 있다.  
이러한 기능을 필요로 하는 예로 문자열 내에 특정 문자들이 몇 번 등장하는지 세는 것이다.  
다음 예는 문자 'a'의 등장 횟수를 센다.

```javascript
var str = "He's my king from this day until his last day";
var count = 0;
var pos = str.indexOf('a');
while(pos !== -1) {
  count++;
  pos = str.indexOf('a', pos + 1);
}
console.log(count); // '3'을 출력한다.
```

마지막으로 startsWith는 문자열이 특정 입력으로 시작하면 true를 반환하고 endsWith는 문자열이 특정 입력으로 끝나면 true를 반환한다.

```javascript
'Red Dragon'.startsWith('Red'); // true를 반환한다.
'Red Dragon'.endsWith('Dragon'); // true를 반환한다.
'Red Dragon'.startWith('Dragon'); // false를 반환한다.
'Red Dragon'.endsWith('Red'); // false를 반환한다.
```

##### 문자열 분해

문자열을 여러 부분으로 나누기 위해 .split(separator)를 사용할 수 있다.  
하나의 매개변수를 입력받아 부분 문자열 배열을 생성한다.

```javascript
var test1 = 'chicken, noodle, soup, broth';
test1.split(", "); // ["chicken", "noodle", "soup", "broth"]
```

빈 분리자를 전달하면 문자열 내 모든 문자로 구성된 배열이 생성된다.

```javascript
var test1 = 'chicken';
test1.split(""); // ["c", "h", "i", "c", "k", "e", "n"]
```

이는 문자열이 항목들의 나열로 구성될 때 유용하다.  
split 함수를 사용하면 문자열을 배열로 변환해 쉽게 항목들을 순회할 수 있다.

##### 문자열 바꾸기

.replace(string, replaceString)은 문자열 변수 내에 특정 문자열을 다른 문자열로 대체한다.

```javascript
"Wizard of Oz".replace("Wizard", "Witch"); // "Witch of Oz"
```

### 정규 표현식

정규 표현식은 **검색 패턴을 정의한 문자열들의 집합**이다.

자바스크립트에는 정규 표현식에 사용할 수 있는 기본 객체 RegExp가 포함된다.

RegExp의 생성자가 받는 매개변수에는 필수 매개변수인 정규 표현식과 선택 매개변수인 일치 관련 설정이 있다.  
다음은 일치 관련 설정 매개변수의 세부 내용이다.

- i: 대소문자를 구분하지 않고 일치하는 문자열을 검색한다.  
- g: 전역적으로 일치하는 문자열을 검색한다(일치하는 문자열을 처음 발견한 이후 멈추는 대신 모든 일치하는 문자열을 찾는다).  
- m: 다중열 문자열에 대해서도 일치하는 문자열을 검색한다.

RegExp에는 두 가지 함수가 있다.

- search(): 문자열 내에 일치하는 문자열을 찾고, 그 문자열의 인덱스를 반환한다.  
- match(): 일치하는 문자열을 찾고, 모든 일치하는 문자열을 반환한다.

자바스크립트 String 객체에는 정규 표현식과 관련된 다음 두 가지 함수가 있는데 두 함수는 RegExp 객체를 인자로 받는다.

- exec(): 문자열 내에 일치하는 문자열을 찾고, 일치하는 첫 번째 문자열을 반환한다.  
- test(): 문자열 내에 일치하는 문자열을 찾고, true 또는 false를 반환한다.

##### 기본 정규 표현식

다음은 기본 정규 표현식 규칙들이다.

- ^: 문자열/줄의 시작을 나타낸다.
- \d: 모든 숫자를 찾는다.
- \[abc\]: 괄호 내의 모든 문자를 찾는다.
- \[^abc]: 괄호 내의 문자들을 제외한 모든 문자를 찾는다.
- \[0-9]: 괄호 내의 모든 숫자를 찾는다.
- \[^0-9]: 괄호 내의 숫자들을 제외한 모든 숫자를 찾는다.
- (x|y): x 또는 y를 찾는다.

```javascript
var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n); // '11'을 출력한다.
```

##### 자주 사용하는 정규 표현식

정규 표현식은 자바스크립트에서 **사용자의 입력이 유효한지 확인**할 때 매우 유용하다.

다음은 개발자들이 자주 사용하는 5가지 정규 표현식이다.

- 숫자를 포함하는 문자: /\d+/
- 숫자만 포함하는 문자: /^\d+$/
- 부동소수점 문자: /^[0-9]*.[0-9]*[1-9]+$/
- 숫자와 알파벳만을 포함하는 문자: /[a-zA-Z0-9]/
- 질의 문자열: /(\[^?=&])(=(\[^&]*))/

### 인코딩

인코딩은 컴퓨터 과학 분야에서 **효율적인 전송 혹은 저장을 위해 문자들을 특수 포맷으로 표현**하는 포괄적인 개념이다.

모든 컴퓨터 파일 유형은 특정 구조로 인코딩된다.

### Base64 인코딩

btoa() 함수는 문자열로부터 Base64 인코딩된 ASCII 문자열을 생성한다.  
문자열의 각 문자는 바이트로 취급된다.

atob() 함수는 Base64 인코딩을 사용해 인코딩된 자료의 문자열을 디코딩한다.

### 문자열 단축

p. 78 ~ 79 참고

### 암호화

p. 80 ~ 81 참고

##### RSA 암호화

p. 81 ~ 85 참고

### 요약
