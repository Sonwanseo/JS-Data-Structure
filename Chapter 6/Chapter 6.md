# Chapter 6. 자바스크립트 객체

자바스크립트 언어가 여러 용도로 자유자재로 사용될 수 있는 이유는 자바스크립트 객체 덕분이다.

### 자바스크립트 객체 속성

객체 상수 {} 또는 new Object(); 구문을 통해 **자바스크립트 객체를 생성**할 수 있다.  
**추가적인 속성을 추가**하거나 **속성에 접근**하는 방법은 object.propertyName을 사용하거나 object['propertyName']을 사용하면 된다.

```javascript
var javaScriptObject = {};
var testArray = [1, 2, 3, 4];

javaScriptObject.array = testArray;
console.log(javaScriptObject); // { array: [1, 2, 3, 4] }

javaScriptObject.title = 'Algorithms';
console.log(javaScriptObject); // { array: [1, 2, 3, 4], title: 'Algorithms' }
```

##### 프로토타입 활용 상속

자바와 같은 대부분의 강 자료형 언어에서는 클래스의 메소드가 클래스와 동시에 정의된다.  
하지만 자바스크립트에서는 **함수가 클래스의 자바스크립트 Object 속성으로 추가**돼야 한다.

```javascript
function ExampleClass() {
  this.name = "JavaScript";
  this.sayName = function() {
    console.log(this.name);
  }
}

// 신규 객체
var example1 = new ExampleClass();
example1.sayName(); // "JavaScript"
```

위 클래스는 생성자에서 sayName 함수를 동적으로 추가한다.  
이러한 패턴을 '프로토타입 활용 상속'이라 한다.

자바스크립트에서 '프로토타입 활용 상속'은 유일한 상속 방법이다.  
클래스의 함수를 추가하기 위해서는 .prototype 속성을 사용한 다음 함수의 이름만 지정하기만 하면 된다.

.prototype 속성을 사용하는 것은 해당 객체의 자바스크립트 Object 속성을 동적으로 확장하는 것이다.  
자바스크립트는 동적이고 클래스는 새로운 함수 멤버를 이후에 필요할 때 추가할 수 있기 때문에 이러한 방식이 표준이다.

```javascript
function ExampleClass() {
  this.array = [1, 2, 3, 4, 5];
  this.name = "JavaScript";
}

// 신규 객체
var example1 = new ExampleClass();

ExampleClass.prototype.sayName = function() {
  console.log(this.name);
}

example1.sayName(); // "JavaScript"

```

### 생성자와 변수

자바스크립트에서 클래스의 변수가 해당 클래스 객체의 속성이기 때문에 this.propertyName으로 선언된 **모든 속성을 공개적으로 접근**할 수 있다.  
이는 해당 객체의 속성들을 다른 범위에서도 **직접 접근**할 수 있다는 의미이다.

```javascript
function ExampleClass(name, size) {
  this.name = name;
  this.size = size;
}

var example = new ExampleClass("Public", 5);
console.log(example); // { name: "Public", size: 5 }

// 공개 변수 접근하기
console.log(example.name); // "Public"
console.log(example.size); // 5
```

비공개 변수를 흉내내기 위해 this.propertyName을 사용하는 대신 지역 변수를 선언한 다음 해당 변수에 대한 접근을 허용하는 **getter와 setter**를 만들 수 있다.  
이런 식으로 변수는 **해당 생성자의 범위 내에서만 사용 가능**하다.  
동시에 이러한 비공개 변수를 흉내 낸 지역 변수들에 접근하기 위해서는 인터페이스 함수들을 정의해야 한다.  
이러한 인터페이스 함수들은 생성자 바깥에서는 추가할 수 없다.

```javascript
function ExampleClass(name, size) {
  var priavteName = name;
  var privateSize = size;
  
  this.getName = function() { return privateName; }
  this.setName = function(name) { privateName = name; }
  
  this.getSize = function() { return privateSize; }
  this.setSize = function(size) { privateSize = size; }
}

var example = new ExampleClass("Sammie", 3);
example.setSize(12);

console.log(example.privateName); // undefined
console.log(example.getName()); // "Sammie";
console.log(example.privateSize); // undefined
console.log(example.getSize()); // 12
```

### 요약

다른 객체지향 프로그래밍 언어와 달리 자바스크립트에서는 프로토타입 활용 상속이 상속에 있어 선호되는 방법이다.  
프로토타입 활용 상속은 .prototype을 통해 **신규 함수들을 자바스크립트 클래스에 추가**함으로써 동작한다.

자바와 C++에서 비공개 변수는 명시적으로 선언된다.  
하지만 자바스크립트는 비공개 변수를 지원하지 않는다.  
따라서 비공개 변수의 기능을 흉내내기 위해서는 **생성자 함수의 범위에 한정된 변수를 생성**해야 한다.  
this.variableName을 통해 변수를 해당 객체의 일부로서 선언하면 해당 속성은 자동으로 공개 속성이 된다.
