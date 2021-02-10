# Chapter 2. 자바스크립트의 독특한 특징

자바스크립트는 동적 인터프리터 프로그래밍 언어이기 때문에 다른 전통적인 객체지향 프로그래밍 언어들과 구문이 다르다.

### 자바스크립트 범위

범위는 자바스크립트 **변수에 대한 접근 권한**을 정의하는 것이다.  
자바스크립트에서 변수는 전역 범위 또는 지역 범위에 속할 수 있다.  
전역 변수는 전역 볌위에 속하는 변수이고 **프로그램의 어디에서나** 해당 변수에 접근할 수 있다.

##### 전역 선언: 전역 범위

자바스크립트에서 연산자 없이 변수를 선언할 수 있다.

```javascript
test = "sss";
consoel.log(test); // "sss"를 출력한다.
```

위 코드는 전역 변수를 생성한다.  
하지만 위와 같은 선언 방식은 피해야 한다.  
항상 **var, const, let** 중 하나의 키워드를 이용하여 변수를 선언하자.

##### var를 사용해 선언하기: 함수 범위

자바스크립트에서 var는 변수를 선언하는 데 사용하는 키워드다.  
변수를 어디에서 선언하든 **변수 선언이 함수의 맨 앞으로 이동**하고, 이를 "변수 호이스팅"이라고 부른다.

```javascript
function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log(bottom);
  
  var bottom;
}
scope1(); // "bottom"을 출력하며 오류가 발생하지 않는다.
```

Scope1 함수의 가장 마지막 줄에 위치한 bottom 변수 선언은 맨 앞으로 이동하며 bottom 변수 출력은 오류 없이 수행된다.

var 키워드에 관해 주목해야 할 핵심적인 사항은 **해당 변수의 범위가 가장 가까운 함수 범위**라는 것이다.

```javascript
function scope2(print) {
  if(print) {
    var insideIf = '12';
  }
  
  console.log(insideIf);
}
scope2(true); // 12를 출력하며 오류가 발생하지 않는다.
```

자바에서 위 구문은 오류를 일으킬 것이다.  
insideIf 변수가 if문 블록 내에서만 사용 가능하고 if문 블록 외부에서는 사용할 수 없기 때문이다.

```javascript
var a = 1;
function four() {
  if(true) {
    var a = 4;
  }
  
  console.log(a); // '4'를 출력한다.
}
```

전역변수 값이 1이 아니라 4가 출력된다.  
a 변수가 four 함수 범위 내에서 재선언됐고 사용 가능하기 때문이다.

##### let을 활용한 선언: 블록 범위

변수를 선언할 때 사용할 수 있는 또 다른 키워드로 let이 있다.  
let을 사용해 선언된 변수는 **가장 가까운 블록 범위**를 갖는다.

```javascript
function scope3(print) {
  if(print) {
    let insideIf = "12";
  }
  
  console.log(insideIf);
}
scope3(true); // 오류 ReferenceError가 발생한다.
```

insideIf는 let으로 선언되어 if문 블록 내에서만 사용이 가능하기 때문에 범위 밖에서 접근하면 오류가 발생한다.

### 등가와 형

자바스크립트에는 자바와 같은 전통적인 언어와 다른 자료형이 있다.

##### 변수형

자바스크립트에는 boolean, number, string, undefined, object, function, symbol과 같은 일곱 개의 기본 자료형이 있다.  
여기서 특이한 점은 **선언만 되고 값이 할당되지 않은 변수에 undefined가 할당**된다는 것이다.  
typeof는 **변수의 형을 반환**하는 데 사용하는 기본 연산자다.

```javascript
var is20 = false; // boolean
typeof is20; // boolean

var age = 19;
typeof age; // number

var lastName = "Bae";
typeof lastName; // string

var fruits = ["Apple", "Banana", "Kiwi"];
typeof fruits; // object

var nullVar = null;
typeof nullVar; // object

var function1 = function() {
  console.log(1);
}
typeof function; // function

var blank;
typeof blank; // undefined
```

##### 참/거짓 확인

if문 내에서 참/거짓 확인이 사용된다.  
많은 언어들의 경우 if() 함수 내의 매개변수는 boolean형이어야 한다.  
하지만 자바스크립트는 이 점에 있어 좀 더 유연하다.

```javascript
if(node) {
  ...
}
```

여기서 node는 변수다.  
해당 변수가 비었거나 null이거나 undefined이면 해당 변수는 false로 평가된다.

다음은 일반적으로 사용되는 표현식 중 false로 평가되는 경우다.

- false
- 0
- 빈 문자열('' or "")
- NaN
- undefined
- null

다음은 일반적으로 사용되는 표현식 중 true로 평가되는 경우다.

- true
- 0이 아닌 다른 숫자
- 비어 있지 않은 문자열
- 비어 있지 않은 객체

```javascript
var printIfTrue = "";

if(printIfTrue) {
  console.log('truthy');
} else {
  console.log('falsey'); // 'falsey'를 출력한다.
}
```

##### === 대 ==

자바스크립트는 스크립트 언어이고 변수 선언 시 변수에 형이 할당되지 않는다.  
하지만 **코드가 실행될 때** 해당 변수의 형이 해석된다.

따라서 ===는 ==보다 등가를 좀 더 엄격히 확인한다.  
==가 값만을 확인하는 반면 ===는 형과 값 모두 확인한다.

```javascript
"5" === 5; // true를 반환한다.
"5" === 5; // false를 반환한다.
```

"5" == 5는 true를 반환한다.  
"5가" 비교 전에 숫자로 강제 변환되기 때문이다.  
반면 "5" === 5는 false를 반환한다.  
"5"는 문자열인 반면 5는 숫자이기 때문이다.

##### 객체

자바와 같은 강 자료형 언어는 isEquals()를 사용해 두 객체가 동일한지 확인한다.  
자바스크립트에서 두 객체가 동일한지 확인하고자 할 때 == 연산자를 사용하면 true로 평가되지 않는다.

````javascript
var o1 = {};
var o2 = {};

o1 == o2; // false를 반환한다.
o1 === o2; // false를 반환한다.
````

위 객체는 두 변수의 **메모리상 주소가 다르기** 때문에 동일하지 않다.

이것이 대부분의 자바스크립트 애플리케이션이 lodash나 underscore와 같은 유틸리티 라이브러리를 사용하는 이유다.  
이 두 라이브러리에는 두 객체 혹은 두 값을 정확하게 확인할 수 있는 isEqual(object1, object2) 함수가 있다.  
이것이 가능한 이유는 isEqual 함수가 "속성 기반 등가 비교 방식"으로 구현됐기 때문이다.  
"속성 기반 등가 비교 방식"은 **객체의 각 속성을 비교**한다.

```javascript
function isEquivalent(a, b) {
  // 속성 이름 배열
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  
  // 속성 길이가 다른 경우 두 객체는 다른 객체다.
  if(aProps.length != bProps.length) {
    return false;
  }
  
  for(var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    
    // 속성 값이 다른 경우 두 객체는 같지 않ㄴ다.
    if(a[propName] !== b[propName]) {
      return false;
    }
  }
  
  // 모든 것이 일치하면 두 객체는 일치한다.
  return true;
}

isEquivalent({'hi': 12}, {'hi': 12}); // true를 반환한다.
```

isEquivalent 함수는 문자열이나 숫자 하나만을 속성으로 갖는 객체에 대해서도 잘 동작할 것이다.

```javascript
var obj1 = {'prop1': 'test', 'prop2': function() {} };
var obj2 = {'prop1': 'test', 'prop2': function() {} };

isEquivalent(obj1, obj2); // false를 반환한다.
```

위와 같이 isEquivalent 함수가 잘 동작하는 이유는 함수와 배열이 등가를 비교하기 위해 단순히 == 연산자를 사용하는 것이 아니기 때문이다.

```javascript
var function1 = function() { console.log(2) };
var function2 = function() { console.log(2) };
console.log(function1 == function2); // 'false를 출력한다.'
```

두 함수가 동일한 연산을 수행하지만 두 함수의 메모리상 주소는 다르다.  
따라서 등가 연산자는 false를 반환한다.  
기본 등가 확인 연산자인 ==와 ===는 문자열과 숫자에만 사용할 수 있다.  
객체에 대한 등가 확인을 구현하려면 **객체의 각 속성을 확인**해야 한다.

### 요약

자바스크립트에는 대부분의 프로그래밍 언어들이 사용하지 않는 다른 방식의 변수 선언 방식이 존재한다.  
var는 함수 범위 내에서 변수를 선언하고 let은 블록 범위에서 변수를 선언하고 아무 연산자 없이 변수를 선언하면 해당 변수는 전역 범위엥서 선언된다.  
하지만 언제나 전역 범위로 변수를 선언하는 것은 피해야 한다.

형 확인을 위해서는 typeof를 사용해 원하는 형이 맞는지 검증할 수 있다.

마지막으로 등가 확인을 위해 값에 대해서는 ==를 사용하고 값과 형이 모두 같은지 확인하기 위해서는 ===를 사용하자.  
하지만 ==와 === 연산자는 숫자, 문자열, 불리언과 같은 비객체형에만 사용할 수 있다.
