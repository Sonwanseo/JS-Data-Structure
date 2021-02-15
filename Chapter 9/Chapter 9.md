# Chapter 9. 집합

### 집합 소개

집합은 가장 근간이 되는 자료 구조 중 하나다.  
집합의 개념은 유한하고 구분되는 객체들의 그룹이다.  
일반적인 용어로 표현하자면 프로그래밍에서 집합은 정렬되지 않은 유일한 항목들의 그룹이다.

집합은 O(1) 상수 시간에 유일한 항목을 확인하고 추가할 수 있기 때문에 중요하다.  
집합이 상수 시간 연산이 가능한 이유는 집합의 구현이 해시 테이블의 구현을 기초로 하기 때문이다.

자바스크립트에서는 Set이 기본 지원된다.

```javascript
var exampleSet = new Set();
```

기본 Set 객체에는 속성이 하나만 존재하는데 size라는 정수 속성이다.  
해당 속성은 집합 내 항목들의 현재 개수를 나타낸다.

### 집합 연산

집합은 항목이 유일한지 확인하는 데 있어 강력한 자료 구조다.

##### 삽입

Set의 주요 특징은 유일함을 확인한다는 것이다.  
Set은 항목들을 추가할 수 있지만 중복되는 항목은 허용되지 않는다.

```javascript
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.add(2); // exampleSet: Set {1, 2}
```

시간 복잡도: O(1)

##### 삭제

Set은 집합으로부터 항목들을 삭제할 수도 있다.
Set.delete는 불리언을 반환한다.

```javascript
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.delete(1); // true
exampleSet.add(2); // exampleSet: Set {2}
```

시간 복잡도: O(1)

##### 포함

Set.has는 해당 항목이 집합 내에 존재하는지 확인하는데 O(1) 찾기 시간밖에 걸리지 않는다.

```javascript
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.has(1); // true
exampleSet.has(2); // false
exampleSet.add(2); // exampleSet: Set {1, 2}
exampleSet.has(2); // true
```

시간 복잡도: O(1)

### 기타 유틸리티 함수

기본 지원되는 집합 함수 외에도 기타 필수 연산들이 사용 가능하다.

##### 교집합

두 집합의 교집합은 해당 두 집합의 공통 항목들로 구성된다.
교집합 함수는 두 집합의 공통 항목들로 이루어진 집합을 반환한다.

```javascript
function intersectSets(setA, setB) {
  let intersection = new Set();
  for(let elem of setB) {
    if(setA.hash(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
const setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]);
intersectSets(setA, setB); // Set {2, 3}
```

##### 상위 집합 여부 확인

어떤 집합이 다른 집합의 모든 항목들을 포함하는 경우 해당 다른 집합의 '상위 집합'이다.  
isSuperSet 함수는 집합이 다른 집합의 상위 집합인지 확인한다.

```javascript
function isSuperset(setA, subset) {
  for(let elem of subset) {
    if(!setA.has(elem)) return false;
  }
  return true;
}

const setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5]);
isSuperset(setA, setB); // true
// setA가 setB의 모든 항목을 포함하기 때문에
isSuperset(setA, setC); // false
// setA가 setC의 항목 5를 포함하지 않기 때문에
```

##### 합집합

두 집합의 합집합은 양쪽 집합의 항목들을 합친다.  
unionSet 함수는 중복 없이 두 집합의 항목들을 모두 포함하는 신규 집합을 반환한다.

```javascript
function unionSet(setA, setB) {
  let union = new Set(setA);
  for(let elem of setB) union.add(elem);
  return union;
}

const setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5]);
unionSet(setA, setB); // Set {1, 2, 3, 4}
unionSet(setA, setC); // Set {1, 2, 3, 4, 5}
```

##### 차집합

집합 A에 대한 집합 B의 차집합은 A에는 있지만 B에는 없는 항목들의 집합이다.  
differenceSet 함수는 기본 delete 메소드를 활용해 차집합 연산을 구현한다.

```javascript
function differenceSet(setA, setB) {
  let difference = new Set(setA);
  for(let elem of setB) difference.delete(elem);
  return difference;
}

const setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]);
differenceSet(setA, setB); // Set {1, 4}
```

### 요약

집합은 정렬되지 않은 유일한 항목들을 나타내는 근간이 되는 자료 구조다.  
자바스크립트의 Set 객체는 삽입, 삭제, 포함 여부 확인을 지원한다.  
해당 연산들은 모두 O(1) 시간 복잡도를 지닌다.  
이러한 내장된 메소드들을 활용해 교집합과 차집합, 합집합, 상위 집합 여부 확인 등의 기타 기본 집합 연산들을 구현할 수 있다.