# Chapter 5. 자바스크립트 배열

### 배열 소개

배열은 **가장 근간이 되는 자료 구조 중 하나**다.

```javascript
var array1 = [1, 2, 3, 4];
```

##### 삽입

삽입은 **새로운 항목을 자료 구조 내에 추가**하는 것을 의미한다.
자바스크립트는 .push(element) 메소드를 사용해 배열 삽입을 구현한다.
해당 메소드는 새로운 항목을 배열 끝에 추가한다.

```javascript
var array1 = [1, 2, 3, 4];
array1.push(5); // array1 = [1, 2, 3, 4, 5]
array1.push(7); // array1 = [1, 2, 3, 4, 5, 7]
array1.push(2); // array1 = [1, 2, 3, 4, 5, 7, 2]
```

##### 삭제

자바스크립트는 .pop() 메소드를 사용해 배열 삭제를 구현한다.
해당 메소드는 배열에 마지막으로 추가된 항목을 제거하고, 제거된 항목을 반환한다.

```javascript
var array1 = [1, 2, 3, 4];
array1.pop(); // 4를 반환한다, array1 = [1, 2, 3]
array1.pop(); // 3을 반환한다, array1 = [1, 2]
```

배열로부터 항목을 제거하는 또 다른 방법으로 .shift() 메소드가 있다.
해당 메소드는 첫 번째 항목을 제거한 다음 해당 항목을 반환한다.

```javascript
var array1 = [1, 2, 3, 4];
array1.shift(); // 1을 반환한다, array1 = [2, 3, 4]
array1.shift(); // 2를 반환한다, array1 = [3, 4]
```

##### 접근

접근 연산은 인덱스를 지정함으로써 수행된다.

```javascript
var array1 = [1, 2, 3, 4];
array1[0]; // 1을 반환한다.
array1[1]; // 2를 반환한다.
```

### 반복

반복은 어떤 자료 구조 내에 담긴 항목들을 하나씩 접근하는 과정이다.
자바스크립트에는 배열을 반복 접근하는 여러 방법이 존재한다.

##### for(변수; 조건; 수정)

for는 가장 널리 사용되는 반복 방법이다.

```javascript
for(var i = 0, len = array1.length; i < len; i++) {
  console.log(array1[i]);
}
```

위 코드는 변수 i를 초기화하고 몸체 코드를 실행하기 전에 조건이 거짓인지 확인하고 조건이 거짓인 경우 변수를 수정한다.

마찬가지로 while 루프를 사용할 수도 있다.
하지만 계수기가 루프의 바깥에서 초기화돼야 한다.

```javascript
var counter = 0;
while(counter < array1.length) {
  // 이곳에 코드 삽입
  counter++;
}
```

다음과 같이 while 루프를 사용해 무한 루프를 구현할 수 있다.

```javascript
while(true) {
  if(breakCondition) {
    break;
  }
}
```

마찬가지로 for 루프는 아래와 같이 조건을 설정하지 않음으로써 무한 루프를 구현할 수 있다.

```javascript
for( ; ; ) {
  if(breakCondition) {
    break;
  }
}
```

##### for (in)

자바스크립트 배열을 반복 접근하기 위한 다른 방법으로 인덱스를 하나씩 호출하는 방법이 있다.

```javascript
var array1 = ['all', 'cows', 'are', 'big'];

for(var index in array1) {
  console.log(array1[index]);
}
```

##### for (of)

```javascript
for(var element of array1) {
  console.log(element);
}
```

##### forEach()

forEach와 다른 반복 방법과의 큰 차이점은 forEach는 반복 바깥으로 빠져나오거나 배열 내 특정 항목들을 건너뛸 수 없다는 것이다.
forEach가 각 항목을 반복 접근한다는 의미에 있어 더 명시적이다.

```javascript
var array1 = ['all', 'cows', 'are', 'big'];

array1.forEach(function(element, index) {
  console.log(element);
});

array1.forEach(function(element, index) {
  console.log(array1[index]);
})
```

### 도움 함수

##### .slice(begin, end)

.slice()는 기존 배열을 수정하지 않고도 해당 배열의 일부를 반환한다.
.slice()는 배열의 시작 인덱스와 끝 인덱스 두 개의 매개변수를 받는다.

```javascript
var array1 = [1, 2, 3, 4];
array1.slice(1, 2); // [2]를 반환한다, array1 = [1, 2, 3, 4]
array1.slice(2, 4); // [3, 4]를 반환한다, array1 = [1, 2, 3, 4]
```

시작 인덱스만 매개변수로 전달하는 경우 끝 인덱스는 해당 배열의 인덱스 최댓값으로 가정한다.

매개변수로 아무것도 전달하지 않는 경우 .slice()는 배열의 복사본을 반환한다.

자바스크립트의 배열이 참조 기반이라는 점을 기억하자.
이는 배열에 신규 변수를 할당한 다음, 해당 신규 변수를 통해 배열을 변경하는 경우 변경 사항이 원래 배열에도 적용된다는 것을 의미한다.

새로운 배열을 생성하려면 .from()을 사용할 수 있다.

```javascript
var array1 = [1, 2, 3, 4];
var array2 = Array.from(array1);

array1; // [1, 2, 3, 4]
array2; // [1, 2, 3, 4]

array2[0] = 5;

array1; // [1, 2, 3, 4]
array2; // [5, 2, 3, 4]
```

##### .splice(begin, size, element1, element2)

.splice()는 기존 항목을 제거하거나 신규 항목을 추가함으로써 배열의 내용을 반환하고 변경한다.

.splice()는 세 개의 매개변수를 받는데 해당 매개변수는 시작 인덱스, 제거할 항목의 크기, 추가할 신규 항목들이다.
새로운 항목들은 첫 번째 매개변수에서 지정한 위치에 추가된다.
.splice()는 제거된 항목들을 반환한다.

```javascript
var array1 = [1, 2, 3, 4];
array1.splice(); // []를 반환한다, array1 = [1, 2, 3, 4]
array1.splice(1, 2); // [2, 3]을 반환한다, array1 = [1, 4]
```

##### .concat()

.concat()은 신규 항목을 배열의 맨 뒤에 추가한 다음, 해당 배열을 반환한다

```javascript
var array1 = [1, 2, 3, 4];
array1.concat(); // [1, 2, 3, 4]를 반환한다, array1 = [1, 2, 3, 4]
array1.concat([2, 3, 4]); // [1, 2, 3, 4, 2, 3, 4]를 반환한다, array1 = [1, 2, 3, 4]
```

##### .length 속성

.length 속성은 배열의 크기를 반환한다.
해당 속성을 더 작은 크기로 변경하면 배열에서 항목들이 제거된다.

```javascript
var array1 = [1, 2, 3, 4];
console.log(array1.length); // 4를 출력한다.
array1.length = 3; // array1 = [1, 2, 3]
```

##### 전개 연산자

전개 연산자는 점 세 개로 표현하며 제로 인자가 기대되는 곳에서 인자를 확장하는 데 사용된다.

```javascript
function addFourNums(a, b, c, d) {
  return a + b + c + d;
}
var numbers[1, 2, 3, 4];
console.log(addFourNums(...numbers)); // 10
```

Math.max와 Math.min 함수 모두 무한 개의 매개변수를 받는다.
따라서 다음 연산을 위해 전개 연산자를 사용할 수 있다.

```javascript
var array1 = [1, 2, 3, 4, 5];
Math.max(...array1); // 5

var array2 = [3, 2, -123, 2132, 12];
Math.min(...array2); // -123
```

