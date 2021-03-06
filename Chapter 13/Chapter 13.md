# Chapter 13. 연결 리스트

연결 리스트는 각 노드가 다른 노드를 가리키는 자료 구조다.

### 단일 연결 리스트

연결 리스트 자료 구조는 각 노드가 다음 노드에 대한 참조를 갖는 자료 구조다.

단일 연결 리스트의 노드에는 data와 next라는 속성이 있다.  
data는 연결 리스트 노드의 값을 저장하고 next는 SinglyLinkedListNode의 다른 인스턴스에 대한 포인터를 저장한다.

```javascript
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}
```

연결 리스트의 시작을 헤드라고 부른다.  
연결 리스트에 어떤 항목도 삽입되기 전에 헤드 속성의 기본값은 null이다.

- SinglyLinkedList.js

##### 삽입

연결 리스트의 헤드가 비어 있는 경우 헤드는 신규 노드로 설정된다.  
헤드가 비어 있지 않다면 예전 헤드가 temp에 저장되고 새로운 헤드가 신규로 추가된 노드가 된다.  
마지막으로 새로운 헤드의 next는 temp를 가리킨다.

- SinglyLinkedList.js

##### 값에 의한 삭제

단일 연결 리스트에서 노드를 삭제하는 것은 해당 노드의 참조를 제거함으로써 구현할 수 있다.  
삭제하고자 하는 노드가 연결 리스트의 중간에 있다면 삭제하고자 하는 노드의 next 포인터가 가리키는 노드를 찾는다.  
그러고 나서 삭제하고자 하는 노드의 이전 노드의 next 포인터가 삭제하고자 하는 노드의 다음 노드를 가리키도록 한다.

삭제하고자 하는 노드가 단일 연결 리스트의 끝에 위치한다면 마지막에서 두 번째 노드가 자신의 next 속성을 null로 설정해 해당 노드의 참조를 끊어버리면 된다.

- SinglyLinkedList.js

##### 헤드 항목 삭제

연결 리스트의 헤드에 있는 항목을 삭제하는 것은 순회가 필요 없기 때문에 O(1)의 시간에 가능하다.

- SinglyLinkedList.js

##### 검색

어떤 값이 단일 연결 리스트 내에 존재하는지 확인하기 위해서는 모든 next 포인터를 반복 순회하면 된다.

- SinglyLinkedList.js

### 이중 연결 리스트

이중 연결 리스트의 각 노드에는 next 포인터와 prev 포인터가 있다.

추가로 이중 연결 리스트에는 헤드 포인터와 테일 포인터가 있다.  
헤드는 이중 연결 리스트의 시작을 나타내고 테일은 이중 연결 리스트의 끝을 나타낸다.

이중 연결 리스트에서 삭제와 삽입, 검색을 구현하는 것은 단일 연결 리스트에서 구현하는 것과 비슷하다.  
하지만 삽입과 삭제의 경우 next 속성과 prev 속성이 반드시 갱신돼야 한다.

- DoublyLinkedList.js

##### 헤드에 항목 삽입하기

이중 연결 리스트의 헤드에 항목을 삽입하는 것은 prev 포인터를 갱신해야 한다는 점을 제외하고는 단일 연결 리스트의 헤드에 항목을 삽입하는 것과 동일하다.

이중 연결 리스트의 헤드가 비어 있는 경우 헤드와 테일을 신규 노드로 설정한다.  
헤드가 비어 있지 않다면 temp 변수에 신규 노드를 저장한다.  
신규 노드의 next가 현재 노드를 가리킨 다음 현재 헤드의 prev가 신규 노드를 가리킨다.  
마지막으로 헤드 포인터가 신규 노드로 갱신된다.

- DoublyLinkedList.js

##### 테일에 항목 삽입하기

신규 노드를 이중 연결 리스트의 테일에 추가할 수 있다.

- DoublyLinkedList.js

##### 헤드의 항목 삭제하기

이중 연결 리스트의 헤드에 위치한 항목은 O(1) 시간에 제거할 수 있다.  
항목이 하나만 존재하는 헤드와 테일이 동일한 경우 헤드와 테일 모두 null로 설정한다.  
항목이 여러 개 존재하는 경우 헤드를 헤드의 next 포인터로 설정한다.  
마지막으로 신규 헤드의 prev를 null로 설정해 예전 헤드에 대한 참조를 제거한다.

- DoublyLinkedList.js

##### 테일의 항목 삭제하기

헤드에 위치한 노드를 제거하는 것과 마찬가지로 테일 노드를 O(1) 시간에 제거하고 반환할 수 있다.

- DoublyLinkedList.js

##### 검색

어떤 값이 이중 연결 리스트에 존재하는지 확인하기 위해서듣 헤드에서 시작해 헤드의 next 포인터를 사용하면 된다.  
또는 테일에서 시작해 테일의 prev 포인터를 사용할 수도 있다.

이중 연결 리스트 검색의 시간 복잡도가 단일 연결 리스트 검색의 시간 복잡도와 동일하지만 이중 연결 리스트만이 prev 또는 next를 사용해 양방향으로 검색할 수 있다.  
이는 이중 연결 리스트 노드에 대한 참조가 주어졌을 때 이중 연결 리스트는 완전 검색을 수행할 수 있지만 단일 연결 리스트는 주어진 노드의 next 포인터에 국한된

- DoublyLinkedList.js

### 요약

연결 리스트 자료 구조는 다른 노드에 대한 next 포인터를 지닌 각 노드에 의해 동작한다.  
단일 연결 리스트와 이중 연결 리스트 모두 삽입 연산은 O(1) 상수 시간 복잡도를 가진다.  
단일 연결 리스트와 이중 연결 리스트의 헤드로부터 항목을 삭제하는 연산의 시간 복잡도 역시 O(1)이다.  
하지만 검색은 단일 연결 리스트와 이중 연결 리스트 모두 O(n) 시간이 걸린다.

양방향 순회/검색이 필요한 경우 단일 연결 리스트 대신 이중 연결 리스트를 사용해야 한다.  
게다가 이중 연결 리스트를 사용하면 이중 연결 리스트의 테일 혹은 헤드로부터 항목을 O(1) 시간에 얻을 수 있다.

단일 연결 리스트의 경우 헤드로부터 항목을 빠르게 얻을 수 있지만 테일로부터 항목을 얻는 것은 오래 걸리기 때문에 이중 연결 리스트를 사용하면 좀 더 유연하면서 빠르게 헤드나 테일의 항목을 얻을 수 있다.