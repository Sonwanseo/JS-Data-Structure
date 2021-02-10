# Chapter 1. 빅오 표기법

알고리즘을 구현하는 법을 학습하기 전에 알고리즘이 얼마나 효과적인지 분석하는 법을 이해해야 한다.

### 빅오 표기법 기초

빅오 표기법은 **알고리즘의 최악의 경우 복잡도**를 측정한다.  
빅오 표기법에서 n은 입력의 개수를 나타낸다.

빅오 표기법은 그 알고리즘이 얼마나 효율적인지 나타내기 때문에 매우 중요하다.
![일반적인 빅오 복잡도](https://media.vlpt.us/images/qksud14/post/4ac0c4a2-8f0c-48c0-8ed3-11d985d7339a/bigO.jpeg)

##### 일반적인 예

O(1)은 입력 공간에 대해 변하지 않는다.  
따라서 O(1)을 **상수 시간**이라고 부른다.  
_ex) 배열에 있는 항목을 인덱스를 사용해 접근하는 경우_

O(n)은 **선형 시간**이고 최악의 경우에 n 번의 연산을 수행해야 하는 알고리즘에 적용된다.

```javascript
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

O(n^2)은 **2차 시간**이다.

```javascript
function exampleQuadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
}
```

O(n^3)은 **3차 시간**이다.

```javascript
function exampleCubic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
      for (let k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}
```

마지막으로 로그 시간 복잡도를 지닌 알고리즘의 예는 2의 2승부터 n승까지의 항목들을 출력하는 경우가 있다.

로그 시간 복잡도의 효율은 백만 개의 항목과 같이 큰 입력이 있는 경우에 분명하다.  
n이 백만이라도 하더라도 exampleLogarithmic은 log2(1,000,000) = 19.9315686이기 때문에 단지 19개의 항목만을 출력한다.

```javascript
function exampleLogarithmic(n) {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}
```

### 빅오 표기법 규칙

알고리즘의 시간 복잡도를 f(n)이라고 표현해보자.  
n은 필요한 시간을 나타내고 f(n)는 필요한 공간을 나타낸다.  
알고리즘 분석의 목표는 f(n)을 계산함으로써 알고리즘의 효율성을 이해하는 것이지만, f(n)을 계산하는 것은 어려울 수 있다.  
빅오 표기법은 개발자들이 f(n)에 관해 계산하는 데 도움이 되는 기본적인 규칙을 제공한다.  
*시간 복잡도란, 문제를 해결하는 데 걸리는 시간과 입력한 함수 사이의 관계를 말한다.*

[빅오 표기법 참고](https://medium.com/@callmedevmomo/%EC%9B%B9-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-01-%EB%B9%85%EC%98%A4-%ED%91%9C%EA%B8%B0%EB%B2%95-ff369f0efc1d)

##### 계수 법칙: "상수를 제거하라"

입력 크기와 연관되지 않은 상수를 전부 무시하라.  
빅오에서 입력 크기가 클 때 계수를 무시할 수 있다.  
따라서 계수 법칙은 빅오 표기법의 법칙 중 가장 중요하다.

> 상수 k > 0인 경우 f(n)이 O(g(n))이면 kf(n)은 O(g(n))이다.

``````javascript
function a(n) {
	let count = 0;
  for(let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}
``````

```javascript
function a(n) {
  let count = 0;
  for(let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
```

위 두 코드 예 모두 O(n)의 빅오 표기법을 지닌다.  
간단히 말해서 n이 무한대 또는 아주 큰 수에 가까워질 때 네 개의 연산이 추가적으로 존재한다고 해서 달라지는 것은 없기 때문이다.  
빅오 표기법에서 모든 상수는 무시해도 된다.

##### 합의 법칙: "빅오를 더하라"

합의 법칙은 시간 복잡도를 더할 수 있다는 것이다.  
두 개의 다른 알고리즘을 포함하는 상위 알고리즘이 있다고 가정해보자.  
해당 상위 알고리즘의 표기법은 단순히 해당 상위 알고리즘에 포함되는 두 개의 알고리즘의 합이다.

> f(n)이 O(h(n))이고 g(n)이 O(p(n))이라면 f(n) + g(n)은 O(h(n) + p(n))이다.

합의 법칙을 적용한 다음 계수 법칙을 적용해야 한다는 점에 주의하자.

```javascript
function a(n) {
  let count = 0;
  for(let i = 0; i < n; i++) {
    count += 1;
  }
  for(let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
```

위의 예에서 첫 번째 for문은 f(n) = n에 해당하고 두 번째 for문은 f(n) = 5n에 해당한다.  
이로 인해 결괏값은 6n이지만, 계수 법칙을 적용하면 최종적인 결과는 O(n) = n이 된다.

##### 곱의 법칙: "빅오를 곱하라"

곱의 법칙은 빅오가 어떤 식으로 곱해지는지에 관한 것이다.

> f(n)이 O(h(n))이고 g(n)이 O(p(n))이면 f(n)g(n)은 O(h(n)p(n))이다.

다음 코드는 두 개의 중첩 for 루프를 포함하며 해당 중첩 for 루프에 곱의 법칙이 적용된다.

```javascript
function a(n) {
  let count = 0;
  for(let i = 0; i < n; i++) {
    count += 1;
    for(let j = 0; j < 5 * n; j++) {
      count += 1;
    }
  }
  return count;
}
```

위의 예에서 f(n) = 5n * n이다.  
여섯 번째 줄이 내부 루프에 의해 5n번 실행되고 내부 루프가 외부 루프에 의해 n번 실행되기 때문이다.  
따라서 결과는 5n^2번 연산이 일어난다.  
계수 법칙을 적용하면 결과는 O(n)=n^2이 된다.

##### 다항 법칙: "빅오의 k승"

다항 법칙은 다항 시간 복잡도가 동일한 다항 차수를 지닌 빅오 표기법을 지님을 나타낸다.

> f(n)이 k차 다항식이면 f(n)은 O(n^k)이다.

```javascript
function a(n) {
  let count = 0;
  for(let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
```

위의 예에서 f(n) = n^2이다.  
네 번째 줄이 n * n회 실행되기 때문이다.

### 요약

빅오는 알고리즘의 효율을 분석하고 비교하는 데 중요하다.

빅오를 분석하기 위해서는 코드를 살펴보고 빅오 표기버을 단순화하고자 다음 법칙들을 적용해야 한다.

- 계수/상수 제거하기(계수 법칙)
- 빅오 더하기(합의 법칙)
- 빅오 곱하기(곱의 법칙)
- 루프를 조사해 빅오 표기법의 다항 결정하기(다항 법칙)
