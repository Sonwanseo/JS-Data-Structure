# Chapter 3. 자바스크립트 숫자

프로그래밍 언어에서 숫자 연산 덕분에 숫자 값을 계산할 수 있다.
자바스크립트 숫자 연산에는 다음과 같은 것들이 있다.

- +: 덧셈
- -: 뺄셈
- /: 나눗셈
- *: 곱셈
- %: 나머지 연산

위의 연산자들은 다른 프로그래밍 언어에서도 일반적으로 사용되며 자바스크립트에 한정된 것은 아니다.'

### 숫자 체계

자바스크립트는 숫자에 대해 **64비트 부동소수점 표현**을 사용한다.
부호 비트가 1이면 해당 숫자가 음수다.
다음 열한개의 비트는 지수 값 e를 나타낸다.
마지막으로 나머지 52비트가 분수 값을 나타낸다.

![64비트 부동소수점 숫자 체계](https://blog.kakaocdn.net/dn/ZqdvR/btqFBe5sHME/zY2SEoAgrk0lEeWSuxvZR0/img.png)

십진분수로 인해 자바스크립트에서 부동소수점 체계가 **반올림 오류를 일으킬 수 있다.**

예를 들어, 0.1과 0.2를 정확하게 표현할 수 없다.
따라서 0.1 + 0.2 === 0.3의 결과는 false이다.

0.1을 64비트 부동소수점 숫자로 제대로 표현할 수 없는 이유를 이해하기 위해서는 이진 표기법을 이해해야 한다.
이진 표기법으로 십진수를 표현할 때 무한 개의 수가 필요한 경우가 많다.
이로 인해 이진수가 2^n으로 표현되는 것이다.
여기서 n은 정수다.

0.1을 계산하려 할 때 긴 나눗셈이 끝나지 않고 계속될 것이다.
0.1(1/10)을 계산하려 하면 소수점 아래 수가 무한히 생긴다.

### 자바스크립트 숫자 객체

다행히 자바스크립트에는 위와 같은 문제를 해결하는 데 도움이 되는 **Number** 객체의 내장된 속성들이 있다.

##### 정수 반올림

자바스크립트가 **모든 숫자를 나타낼 때 부동 소수점을 사용**하기 때문에 정수 나눗셈은 소용이 없다.

자바와 같은 프로그래밍 언어에서 정수 나눗셈의 결과는 해당 나누기의 몫이다.

예를 들어 자바에서 5/4는 1이 몫이기 때문에 결과는 1이다.
하지만 자바스크립트에서 5/4 결과는 부동소수점이다.

자바에서는 명시적으로 정수를 정수형으로 선언해야 하기 때문에 결과는 부동소수점이 될 수 없다.
자바스크립트에서 정수 나눗셈을 하길 원한다면 다음 중 하나를 사용하면 된다.

```javascript
Math.floor - 가장 가까운 정수로 내림한다.
Math.round - 가장 가까운 정수로 반올림한다.
Math.ceil - 가장 가까운 정수로 올림한다.

Math.floor(0.9); // 0
Math.floor(1.1); // 1

Math.round(0.49); // 0
Math.round(0.5); // 1
Math.round(2.9); // 3

Math.ceil(0.1); // 1
Math.ceil(0.9); // 1
Math.ceil(21); // 21
Math.ceil(21.01); // 22
```

##### Number.EPSILON

Number.EPSILON은 **두 개의 표현 가능한 숫자 사이의 가장 작은 간격을 반환**한다.
이는 부동소수점 근사치를 활용해 분수가 제대로 표현되지 않는 문제를 해결하는 데 유용하다.

```javascript
function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

numberEquals(0.1 + 0.2, 0.3); // true
```

위 함수는 두 수의 차이가 Number.EPSILON보다 작은지 검사해 더 작은 경우 true를 반환한다.
Number.EPSILON이 두 개의 표현 가능한  숫자 사이의 최소 차이라는 것을 기억하자.
0.1 + 0.2와 0.3의 차이는 Number.EPSILON보다 작을 것이다.

##### 최대치

Number.MAX_SAFE_INTEGER는 **가장 큰 정수를 반환**한다.

```javascript
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true
```

위 코드에서 두 수는 더 이상 커질 수 없기 때문에 true를 반환한다.
하지만 위의 코드를 부동소수점과 같이 사용하면 제대로 동작하지 않으며 결과는 false이다.

```javascript
Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022; // false
```

Number.MAX_VALUE는 **가능한 가장 큰 부동 소수점을 반환**한다.

```javascript
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
```

Number.MAX_SAFE_INTEGER와는 달리 위의 코드는 배정밀도 부동소수점 표현을 사용하고 부동소수점에 대해서도 잘 동작한다.

```javascript
Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true
```

##### 최소치

Number.MIN_SAFE_INTEGER는 **가장 작은 정수를 반환**한다.

```javascript
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true
```

위 코드에서 두 수가 더 이상 작아질 수 없기 때문에 true를 반환한다.
하지만 부동소수점과 함께 사용하면 제대로 동작하지 않는다.

```javascript
Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022; // false
```

Number.MIN_VALUE는 **가능한 가장 작은 부동소수점 수를 반환**한다.

Number.MIN_VALUE가 가능한 가장 작은 부동소수점이기 때문에 음수가 아니다.
따라서 실제고 Number.MIN_VALUE는 Number.MIN_SAFE_INTEGER보다 크다.

또한 Number.MIN_VALUE는 0에 가장 가까운 부동소수점이기 때문에 다음과 같은 코드가 가능하다.

```javascript
Number.MIN_VALUE - 1 === -1; // true
```

위 코드가 true인 이유는 위의 코드가 0 - 1 == 1 과 비슷하기 때문이다.

##### 무한

Number.MAX_VALUE보다 큰 유일한 것은 Infinity이고 Number.MIN_SAFE_INTEGER보다 작은 유일한 것은 -Infinity이다.

```javascript
Infinity > Number.MAX_SAFE_INTEGER; // true
-Infinity < Number.MIN_SAFE_INTEGER; // true
-Infinity -32323323 == -Infinity - 1; // true
```

위 코드가 true로 평가되는 이유는 -Infinity보다 작아질 수 있는 것은 없기 때문이다.

##### 크기 순서

다음과 같이 자바스크립트 숫자의 크기를 가장 작은 것부터 가장 큰 것 순으로 요약했다.

```javascript
-Infinity < Number.MIN_SAFE_INTEGER < 0 < Number.MIN_VALUE < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
```

##### 숫자 알고리즘

숫자가 소수인지 판단하는 알고리즘은 숫자와 관련된 가장 많이 논의된 알고리즘 중 하나다.

###### 소수 테스트

숫자가 소수인지 알아보는 방법은 숫자 n을 2부터 n - 1까지의 수로 나눠 나머지가 0인지 확인하면 된다.

```javascript
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  // 2부터 n - 1까지의 수로 나눈다.
  for(let i = 2; i < n; i++) {
    if(n % i == 0) {
      return false;
    }
  }
  
  return true;
}
```

시간 복잡도: O(n)

위 코드의 시간 복잡도는 O(n)이다.
위 알고리즘은 0부터 n까지의 모든 수를 확인하기 때문이다.

위 알고리즘은 쉽게 개선 가능한 알고리즘의 한 예다.
위의 메소드가 2부터 n까지 어떤 식으로 순회하는지 생각해보자.
우선 2의 배수는 무시해도 된다.
또한, 2와 3을 제외하고는 모든 소수는 6k +- 1의 형태를 지닌다.
여기서 k는 정수다.

또한 n이 소수인지 알아보기 위해 반복문을 n의 제곱근까지만 확인해보면 된다.
n의 제곱근이 소수가 아니면 n은 수학 정의에 의해 소수가 아니기 때문이다.

```javascript
function isPrime(n) {
  if(n <= 1) return false;
  if(n <= 3) return true;
  
  // 입력된 수가 2 또는 3인 경우 아래 반복문에서
  // 다섯 개의 숫자를 건너뛸 수 있다.
  if(n % 2 == 0 || n % 3 == 0) return false;
  
  for(let i = 5; i * i <= n; i = i + 6) {
    if(n % i == 0 || n % (i + 2) == 0)
      return false;
  }
  
  return true;
}
```

시간 복잡도: O(sqrt(n))

위의 개선된 알고리즘은 시간 복잡도를 상당히 줄인다.

##### 소인수분해

또 다른 유용한 알고리즘으로 어떤 숫자의 소인수분해를 구하는 것이 있다.
소수는 암호화와 해싱의 기반이 되고 소인수분해는 주어진 숫자를 만들기 위해 어떤 소수들이 곱해져야 하는지 구하는 과정이다.
입력으로 10이 주어지는 경우 아래 함수는 5와 2를 출력할 것이다.

```javascript
function primeFactors(n) {
  // n이 2로 나눠진다면 나눠질 수 있는 만큼 2가 출력된다.
  while(n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }
  
  // 이 지점에서 n은 홀수임이 확실하다. 따라서 수를 두 개씩 증가시킬 수 있다(주목: i = i + 2).
  for(let i = 3; i * i <= n; i = i + 2) {
    // i가 n을 나눌 수 있는 한 계속해서 i가 출력되고 n을 i로 나눈다.
    while(n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }
  
  // 다음 조건문은 n이 2보다 큰 소수인 경우를 처리하기 위한 것이다.
  if(n > 2) {
    console.log(n);
  }
}
primeFactors(10); // '5'와 '2'를 출력한다.
```

시간 복잡도: O(sqrt(n))

위 알고리즘은 i로 나머지가 없이 나눌 수 있는 모든 수를 출력한다.
소수가 함수의 입력 값으로 전달된 경우 아무 수도 출력되지 않다가 마지막 조건문에서 n이 2보다 큰지 확인한 다음 n이 2보다 큰 경우 n이 출력될 것이다.

### 무작위 수 생성기

무작위 수 생성은 어떤 조건이 어떤 식으로 동작하는지 확인하는 데 있어 중요하다.
자바스크립트에는 숫자를 생성하기 위한 내장 함수인 Math.random()이 있다.

Math.,random()은 0과 1 사이의 부동소수점을 반환한다.

1보다 큰 부동소수점을 얻기 위해서는 Math.round()에 범위를 곱하기만 하면 된다.
그러고 나서 곱한 값에 어떤 수를 더하거나 빼서 기준 범위를 만들면 된다.

```javascript
Math.random() * 100; // 0부터 100까지의 부동소수점
Math.random() * 25 + 5; // 5부터 30까지의 부동소수점
Math.random() * 10 - 100; // -100부터 -90까지의 부동소수점
```

무작위 정수를 얻기 위해서는 Math.floor()와 Math.round(), Math.ceil()을 사용해 부동소수점을 정수로 만들면 된다.

```javascript
Math.floor(Math.random() * 100); // 0부터 99까지의 정수
Math.round(Math.random() * 25) + 5; // 5부터 30까지의 정수
Math.ceil(Math.random() * 10)  - 100; // -100부터 -90까지의 정수
```

### 요약

자바스크립트의 모든 숫자는 64비트 부동소수점 형태임을 기억하자.
가능한 가장 작은 부동소수점 증가를 얻기 위해서는 NumberEPSILON을 사용해야 한다.
자바스크립트의 가장 큰 수와 가장 작은 수는 다음 등식과 같이 요약될 수 있다.

```javascript
-Infinity < Number.MIN_SAFE_INTEGER < 0 < Number.MIN_VALUE < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
```

소수 검증과 소인수분해는 암호화와 같이 다양한 컴퓨터 과학 적용 분야에서 사용되는 개념이다.
마지막으로 자바스크립트에서 무작위 수를 생성하기 위해 Math.random()을 사용한다.