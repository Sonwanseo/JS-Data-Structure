# Chapter 10. 검색과 정렬

자료를 검색하고 해당 자료를 정렬하는 것은 근간이 되는 알고리즘이다.  
검색은 자료를 얻기 위해 자료 구조의 항목들을 반복적으로 접근하는 것을 말한다.  
정렬은 자료 구조의 항목들을 순서대로 위치시키는 것을 말한다.  
검색과 정렬 알고리즘은 자료 구조에 따라 다르다.

### 검색

배열에서 검색을 수행할 때 배열이 정렬됐는지 여부에 따라 두 가지 주요 기법이 있다.

선형 검색은 정렬된 자료와 정렬되지 않은 자료 모두에 사용 가능하기 때문에 매우 유연하다.

이진 검색은 정렬된 자료에 대해 사용한다.  
하지만 선형 검색의 시간 복잡도가 이진 검색에 비해 더 높다.

##### 선형 검색

선형 검색은 배열의 각 항목을 한 인덱스씩 순차적으로 접근하면서 동작한다.

```javascript
// 배열을 순회하면서 찾는다.
function linearSearch(array, n) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] == n) return true;
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // true
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false
```

시간 복잡도: O(n)

선형 검색 알고리즘은 배열의 모든 항목을 확인하기 때문에 배열의 정렬 여부와 상관없이 동작한다.  
배열이 정렬된 경우에는 이진 검색을 통해 검색을 좀 더 빠르게 수행할 수 있다.

##### 이진 검색

이진 검색은 정렬된 자료에 사용할 수 있는 검색 알고리즘이다.  
배열의 모든 항목을 확인해야 하는 선형 알고리즘과 달리 이진 검색은 중간 값을 확인해 원하는 값보다 해당 중간 값이 큰지 작은지 확인한다.  
원하는 값이 중간 값보다 작은 경우 이진 검색 알고리즘은 중간 값보다 작은 쪽을 검색하고 원하는 값이 중간 값보다 큰 경우 중간 값보다 큰 쪽을 검색한다.

```javascript
function binarySearch(array, n) {
  let lowIndex = 0, highIndex = array.length - 1, midIndex;
  
  while(lowIndex <= highIndex) {
    midIndex = Math.floor((highIndex + lowIndex) / 2);
    if(array[midIndex] == n) return midIndex;
    else if(n > array[midIndex]) lowIndex = midIndex + 1;
    else highIndex = midIndex - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4)); // 3
console.log(binarySearch([1, 2, 3, 4], 5)); // -1
```

이진 검색 알고리즘은 빠르지만 배열이 정렬된 경우에만 사용할 수 있다.  
이진 검색 알고리즘은 중간 값이 검색 값과 일치하는지 확인한다.  
그러고 나서 검색값이 중간 값보다 큰 경우 검색 범위의 하한 값을 중간 값에 1을 더한 값으로 설정한다.  
검색 값이 중간 값보다 작은 경우 검색 범위의 상한값을 중간 값에 1을 뺀 값으로 설정한다.

이런 식으로 이진 검색 알고리즘은 배열을 계속해서 두 부분으로 나눈다.
검색 값이 중간 값보다 작은 경우 작은 반쪽에서 검색 값을 찾아야 하고 검색 값이 중간 값보다 큰 경우 큰 반쪽에서 검색 값을 찾아야 한다.

### 정렬

정렬은 컴퓨터 과학 분야에서 가장 중요한 주제 가운데 하나다.
정렬된 배열에서 항목을 찾는 것이 정렬되지 않은 배열에서 찾는 것보다 빠르고 쉽다.
정렬 알고리즘을 사용해 프로그램에서 나중에 검색하기 위해서 메모리에서 배열을 정렬하거나 나중에 사용하기 위해 정렬된 배열을 파일에 기록할 수도 있다.

##### 거품 정렬

거품 정렬은 가장 간단한 정렬 알고리즘이다.
거품 정렬은 전체 배열을 순회하면서 항목이 다른 항목보다 큰 경우 두 항목을 교환한다.

swap은 정렬에 사용되는 일반적인 함수다.
swap은 두 배열 항목 값들을 교환하며 대부분의 정렬 알고리즘의 도움 함수로 사용된다.

```javascript
function swap(array, index, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
```

```javascript
function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j <= i; j++) {
      if(array[j] > array[j + 1]) swap(array, i, j);
    }
  }
  return array;
}
bubbleSort(6, 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5, 6]
```

시간 복잡도: O(n^2)  
공간 복잡도: O(1)

거품 정렬은 최악의 종류의 정렬이다.  
다른 정렬 알고리즘은 배열의 이미 정렬된 부분을 활용하는데 비해 거품 정렬은 모든 가능한 짝을 비교하기 때문이다.  
거품 정렬은 중첩 루프를 사용하기 때문에 시간 복잡도는 O(n^2)이다.

##### 선택 정렬

선택 정렬은 가장 작은 항목을 찾아서 해당 항목을 배열의 현 위치에 삽입하는 방식으로 동작한다.
선택 정렬 알고리즘은 거품 정렬 알고리즘보다 약간 더 낫다.

```javascript
function selectionSort(items) {
  let min;
  
  for(let i = 0; i < items.length; i++) {
    // 최소 항목을 현재 위치로 설정한다.
    min = i;
    // 더 작은 항목이 있는지 배열의 나머지를 확인한다.
    for(let j = i + 1; j < items.length; j++) {
      if(items[j] < items[min]) min = j;
      // 현재 위치가 최소 항목 위치가 아니라면 항목들을 교환한다.
      if(i != min) swap(items, i, min);
    }
  }
  
  return items;
}
selectionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
```

시간 복잡도: O(n^2)  
공간 복잡도: O(1)

##### 삽입 정렬

삽입 정렬은 배열을 순차적으로 검색하면서 정렬되지 않은 항목들을 배열의 왼쪽의 정렬된 부분으로 이동시킨다.

```javascript
function insertSort(items) {
  var len = items.length, // 배열의 항목 수
      value, // 현재 비교 중인 값
      i, // 정렬되지 않은 부분의 인덱스
      j; // 정렬된 부분의 인덱스
  
  for(i = 0; i < len; i++) {
    // 현재 값이 이후에 이동될 수도 있기 때문에 저장한다.
    value = items[i];
    
    // 정렬된 부분의 값이 정렬되지 않은 부분의 값보다 큰 경우
    // 정렬된 부분의 모든 항목을 하나씩 이동시킨다.
    // 이는 값을 삽입할 공간을 만든다.
    
    for(j = i - 1; j > -1 && items[j] > value; j--) items[j + 1] = items[j];
  }
  return items;
}
insertSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
```

시간 복잡도: O(n^2)  
공간 복잡도: O(1)

##### 빠른 정렬

빠른 정렬은 기준점을 획득한 다음 해당 기준점을 기준으로 배열을 나눈다.  
이런 식으로 모든 항목이 정렬될 때까지 이 과정을 반복한다.

가장 이상적인 기준점은 배열의 중간 값이다.  
중간 값이 배열을 균등하게 나눌 수 있기 때문이다.  
하지만 정렬되지 않은 배열의 중간값을 얻기 위해서는 계산하는 데 선형 시간이 걸린다.  
따라서 일반적으로 분할 부분의 첫 번째 항목과 중간 항목, 마지막 항목의 중간 값을 취해 기준점을 얻는다.

이러한 정렬은 재귀 정렬이고 분할 정복 방식을 사용해 시간 복잡도를 이차에서 O(nlog2(n))으로 낮춘다.  
하지만 모든 항목을 한쪽으로만 위치시키는 기준점을 선택하는 최악의 경우 시간 복잡도는 O(n^2)이다.

```javascript
function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(itmes, left, right) {
  let index;
  
  if(items.length > 1) {
    index = partition(items, left, right);
    
    if(left < index - 1) quickSortHelper(items, left, index - 1);
    
    if(index < right) quickSortHelper(items, index, right);
  }
  
  return items;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)];
  
  while(left <= right) {
    while(pivot > array[left]) left++;
  	while(pivot < array[right]) right--;
    
    if(left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
    
  return left;
}

quickSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
```

시간 복잡도: 평균 O(nlog2(n)), 최악의 경우 O(n^2)  
공간 복잡도: O(log2(n))

빠른 정렬 알고리즘의 단점 중 하나는 기준점을 항상 잘못 선택하는 경우 시간 복잡도가 O(n^2)가 될 수 있다는 것이다.  
잘못된 기준점을 배열을 균든하게 분할하지 않는다.

추가로 빠른 정렬 알고리즘은 다른 정렬 알고리즘과 비교할 때 더 큰 공간 복잡도인 O(log2(n))을 필요로 한다.  
재귀에서의 콜 스택 때문이다.

평균 성능이 최적화돼야 하는 경우에 빠른 정렬 알고리즘을 사용하자.

##### 빠른 선택

빠른 선택은 정렬되지 않은 목록에서 k번째로 작은 항목을 찾는 선택 알고리즘이다.  
빠른 선택은 빠른 정렬 알고리즘과 같은 접근법을 사용한다.

기준점을 선택한 다음 배열을 분할한다.  
하지만 빠른 정렬처럼 기준점의 양쪽 모두를 재귀적으로 수행하는 대신 한쪽만을 재귀적으로 수행한다.  
이로 인해 복잡도는 O(nlog2(n))에서 O(n)으로 낮아진다.

```javascript
const array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
// 정렬된 형태: [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8, 14]

function quickSelectInPlace(A, l, h, k) {
	var p = partition(A, l, h);
  
  if(p == (k - 1)) return A[p];
  else if(p > (k - 1)) return quickSelectInPlace(A, l, p - 1, k);
  else return quickSelectInPlace(A, p + 1, h, k);
}

function medianQuickselect(array) {
  return quickSelectInPlace(array, 0, array.length - 1, Math.floor(array.length / 2));
}

quickSelectInPlace(array, 0, array.length - 1, 5); // 2
// 2 - 5번째로 가장 작은 항목이기 때문이다.
quickSelectInPlace(array, 0, array.length - 1, 10); // 7
// 7 - 10번째로 가장 작은 항목이기 때문이다.
```

시간 복잡도: O(n)

##### 병합 정렬

병합 정렬은 각 하위 배열에 하나의 항목이 존재할 때까지 배열을 하위 배열로 나눈다.  
그러고 나서 각 하위 배열을 정렬된 순서로 연결한다.

merge 함수는 양쪽 배열의 모든 항목을 정렬된 순서로 더해서 '결과 배열'에 저장해야 한다.  
이를 위해서는 각 배열의 인덱스를 생성해 이미 비교한 항목들을 추적해야 한다.  
한 배열의 모든 항목을 다 사용한 뒤 남은 항목들을 결과 배열에 더하면 된다.

```javascript
function merge(leftA, rightA) {
  var results = [], leftIndex = 0, rightIndex = 0;
  
  while(leftIndex < leftA.length && rightIndex < rightA.length) {
    if(leftA[leftIndex] < rightA[rightIndex]) results.push(leftA[leftIndex++]);
    else result.push(rightA[rightIndex++]);
  }
  
  var leftRemains = leftA.slice(leftIndex), rightRemains = rightA.slice(rightIndex);
  
  // 남은 항목들을 결과 배열에 추가한다.
  return results.concat(leftRemains).concat(rightRemains);
}
```

병합 함수는 두 배열을 가지고 하나의 결과 배열로 병합한다.  
순서를 지키기 위해 배열을 병합하면서 배열의 항목들을 비교해야 한다.

```javascript
function mergeSort(array) {
  if(array.length < 2) return array; // 기저 조건: 항목이 하나뿐이라서 해당 배열은 이미 정렬된 것이다.
  
  var midpoint = Math.floor((array.length) / 2),
      leftArray = array.slice(0, midpoint),
      rightArray = array.slice(midpoint);
  
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

mergeSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]
```

시간 복잡도: O(nlog2(n))  
공간 복잡도: O(n)

병합 정렬은 이후에 병합할 n개의 배열을 생성해야 하기 때문에 공간 복잡도가 크다.  
안정적인 정렬이 필요한 경우에 병합 정렬을 사용한다.  
안정적인 정렬은 동일한 키를 지닌 항목들의 순서가 바뀌지 않음을 보장하는 정렬이다.  
병합 정렬의 시간 복잡도는 O(nlog2(n))임이 보장된다.  
병합 정렬의 단점은 병합 정렬이 O(n)의 공간을 사용한다는 것이다.

##### 계수 정렬

계수 정렬은 값들을 비교하지 않기 때문에 O(k + n)시간 안에 수행된다.  
계수 정렬은 숫자에 대해서만 동작하며 특정 범위가 주어져야 한다.  
항목들을 교환하면서 정렬하는 대신에 배열의 각 항목의 등장 횟수를 센다.  
각 항목의 등장 횟수를 센 다음 해당 등장 횟수를 사용해 새로운 배열을 생성할 수 있다.

```javascript
function countSort(array) {
  var hash = {}, countArr = [];
  
  for(let i = 0; i < array.length; i+) {
  	if(!hash[array[i]]) hash[array[i]] = 1;
  	else hash[array[i]]++;
  }

	for(let key in hash) {
    // 항목이 몇 개가 되든 해당 항목을 배열에 추가한다.
    for(let i = 0; i < hash[key]; i++) countArr.push(parseInt(key));
  }

return countArr;
}

countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]);
// [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 6, 23, 123, 123] 
```

시간 복잡도: O(k + n)  
공간 복잡도: O(k)

제한된 범위의 정수를 정렬할 때는 계수 정렬을 사용한다.  
이러한 종류의 자료에 대해서는 계수 정렬이 가장 빠른 정렬이다.

##### 자바스크립트 내장 정렬

자바스크립트에는 배열 객체에 사용 가능한 내장 메소드인 sort()가 있다.  
sort()는 항목들을 오름차순으로 정렬한다.  
필요한 경우 sort() 함수 호출 시 비교 함수를 sort() 함수의 매개변수로 전달할 수 있다.

기본 비교 함수는 배열을 알파벳순으로 정렬한다.  
따라서 기본 비교 함수는 숫자 자료에 대해서는 제대로 동작하지 않는다.

숫자를 올바르게 정렬하기 위해서는 다음 코드를 사용한다

```javascript
var array1 = [12, 3, 4, 2, 1, 34, 23];

function comparatorNumber(a, b) {
  return a - b;
}

array1.sort(comparatorNumber);
// array1: [1, 2, 3, 4, 12, 23, 34]
```

a - b는 가장 작은 값부터 가장 큰 값순으로 정렬돼야 함을 나타낸다.

### 요약

배열 내에서 검색을 하기 위한 두 가지 방법이 있다.  
바로 선형 검색과 이진 검색이다.

다양한 정렬 알고리즘이 존재하는데, 가장 효율적인 알고리즘은 빠른 정렬, 병합 정렬, 계수 정렬이다.  
계수 정렬이 가장 빠르기는 하지만 배열의 값 범위를 아는 경우에만 사용할 수 있다.

| 알고리즘  | 시간 복잡도 | 공간 복잡도 |
| --------- | ----------- | ----------- |
| 빠른 정렬 | O(nlog2(n)) | O(nlog2(n)) |
| 병합 정렬 | O(nlog2(n)) | O(nlog2(n)) |
| 거품 정렬 | O(n^2)      | O(n^2)      |
| 삽입 정렬 | O(n^2)      | O(n^2)      |
| 선택 정렬 | O(n^2)      | O(n^2)      |
| 계수 정렬 | O(k + n)    | O(k)        |
