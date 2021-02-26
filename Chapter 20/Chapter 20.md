# Chapter 20. 비트 조작

비트 조작은 일반적으로 자바스크립트 개발자가 알아야 하는 주제는 아니다.  
하지만 고성능 서버 측 코드를 구현하길 원한다면 비트 조작에 어느 정도 배워야 한다.

비트 조작을 이해하기 위해서는 논리 회로에 관한 지식이 필요하다.

### 비트 연산자

다음은 자바스크립트에서 사용 가능한 비트 연산자다.

- &: AND
- |: OR
- ~: NOT
- ^: XOR
- <<: 왼쪽 이동
- \>\>: 오른쪽 이동
- \>\>\>: 오른쪽 이동 후 남는 공간을 0으로 채우기

##### AND

AND 연산자는 두 개의 비트가 모두 1일 때 참이다.  
AND 연산자를 나타내기 위해 &를 사용한다.

비트 연산에서 숫자는 이진수 형태로 표현된다.

##### OR

OR 연산자는 비트 중 하나만 1이어도 참이다.  
OR 연산자를 나타내기 위해 |를 사용한다.

##### XOR

XOR은 "exclusive or"를 의미한다.  
비트 중 하나가 1일 때만 참으로 평가된다.  
XOR 연산자를 나타내기 위해 ^를 사용한다.

##### NOT

NOT 연산자는 모든 비트를 뒤집는다.  
NOT 연산자를 나타내기 위해 ~를 사용한다.  
NOT 연산자를 음수 연산자와 헷갈려서는 안 된다.  
비트를 뒤집은 후에 64비트 숫자로 변환된다.

##### 왼쪽 이동

왼쪽 이동의 경우 모든 비트가 왼쪽으로 이동되고 왼쪽 끝 범위를 벗어나는 비트는 버려진다.  
왼쪽 이동 연산자를 나타내기 위해 <<를 사용한다.

왼쪽 이동은 매 이동 시 마다 대상 항목을 두 배로 증가시킨다.  
이는 이진이 2를 기반으로 한 체계이기 때문이다.  
즉, 왼쪽 이동은 수를 2로 곱하는 것과 동일하다.  
하지만 왼쪽 이동으로 인해 비트가 넘쳐서 값이 줄어들 수 있다.

##### 오른쪽 이동

오른쪽 이동의 경우 모든 비트가 오른쪽으로 이동되고 오른쪽 끝 범위를 벗어나는 비트는 버려진다.  
오른쪽 이동 연산자를 나타내기 위해 \>\>를 사용한다.

##### 오른쪽 이동 후 0으로 채우기

오른쪽 이동 후 0으로 채우기의 경우 모든 비트가 오른쪽으로 이동하고 오른쪽 끝 범위를 벗어나는 비트는 버려진다.  
하지만 부호 비트가 이동한 후에 0으로 변한다.
이로 인해 결과는 음이 아닌 숫자가 된다.
오른쪽 이동 후 0으로 채우기 연산자를 나타내기 위해 \>\>\>를 사용한다.

### 숫자 연산

비트 연산자를 사용해 더하기, 빼기, 곱하기, 나누기, 나머지 연산 수행

##### 덧셈

이진수를 더하는 것은 십진수를 더하는 것과 동일하다.

```javascript
function BitwiseAdd(a, b) {
  while(b != 0) {
    var carry = (a & b);
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

console.log(BitwiseAdd(4, 5)); // 9
```

##### 뺄셈

뺄셈은 두 수의 차이다.  
하지만 음수를 더하는 것이라고 생각해도 좋다.

따라서 우선 NOT 연산자를 사용해 부정함수를 생성한다.  
이진수에서 음의 이진수로부터 양의 이진수를 빼려면 모든 비트를 뒤집은 다음 1을 더하면 된다.

```javascript
function BitwiseNegate(a) {
  return bitwiseAdd(~a, 1);
}

console.log(BitwiseNegate(9)); // -9
// 이중 부정을 하면 원래의 값을 얻을 수 있다.
console.log(BitwiseNegate(BitwiseNegate(9))); // 9

function BitwiseSubtract(a, b) {
  return BitwiseAdd(a, BitwiseNegate(b));
}

console.log(BitwiseSubtract(5, 4)); // 1
```

##### 곱셈

이진수를 곱하는 방식은 십진수를 곱하는 방식과 동일하다.

```javascript
function BitwiseMultiply(a, b) {
  var m = 1, c = 0;
  
  if (a < 0) {
    a = BitwiseNegate(a);
    b = BitwiseNegate(b);
  }
  
  while (a >= m && b) {
    if (a & m) c = BitwiseAdd(b, c);
    b = b << 1;
    m = m << 1;
  }
  
  return c;
}

console.log(BitwiseMultiply(4, 5)); // 20
```

##### 나눗셈

나눗셈을 a/b일 때 a로부터 b를 여러 번 빼는 것이라고 생각해도 좋다.

```javascript
function BitwiseDividePositive(a, b) {
  var c = 0;
  
  if (b != 0) {
    while (a >= b) {
      a = BitwiseSubtract(a, b);
      c++;
    }
  }
 	return c;
}

console.log(BitwiseDividePositive(10, 2)); // 5
```

양수를 나누는 것은 상대적으로 간단하다.  
while 루프가 계속해서 나눗셈을 수행하면서 카운터 변수가 a로부터 b를 뺀 횟수를 저장할 수 있다.

하지만, 음수의 경우 while 루프가 영원히 반복될 것이다.  
이를 피하기 위해 두 수를 모두 양수로 변환해야 한다.  
동시에 부호도 저장해야 한다.

```javascript
function BitwiseDivide(a, b) {
  var c = 0, isNegative = 0;
  
  if (a < 0) {
    a = BitwiseNegate(a); // 양수로 변환한다.
    isNegative = !isNegative;
  }
  
  if (b < 0) {
    b = BitwiseNegate(b); // 양수로 변환한다.
    isNegative = !isNegative;
  }
  
  if (b != 0) {
    while (a >= b) {
      a = BitwiseSubtract(a, b);
      c++;
    }
  }
  
  if(isNegative) c = BitwiseNegate(c);
  
  return c;
}

console.log(BitwiseDivide(10, 2)); // 5
console.log(BitwiseDivide(-10, 2)); // -5
console.log(BitwiseDivide(-200, 4)); // -50
```

### 요약

비트 조작은 고성능 수치 연산에 사용된다.  
비트 연산자를 사용하는 것이 Math 클래스의 기본 메소드를 사용하는 것보다 훨씬 빠르다.  
자바스크립트가 Node.js를 활용해 서버 측 프로그래밍에 진입하고 있기 때문에 효율적인 코드를 만들어야 한다.

| 연산자 | 연산                            | 사용 사례                                                    |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| &      | AND                             | 두 비트 모두 1일 때 1                                        |
| \|     | OR                              | 두 비트 중 한 비트라도 1이면 1                               |
| ~      | NOT                             | 모든 비트를 뒤집는다.                                        |
| ^      | XOR                             | 두 비트 중 한 비트만 1인 경우에만 1                          |
| <<     | 왼쪽 이동                       | 왼쪽으로 이동한다. 넘치는 비트는 버린다.                     |
| \>\>   | 오른쪽 이동                     | 오른쪽으로 이동한다. 넘치는 비트는 버린다.                   |
| \>\>\> | 오른쪽으로 이동 후 0으로 채우기 | 오른쪽으로 이동한다. 넘치는 비트는 버리고 부호 비트는 0이 된다. |

