# Chapter 14. 캐싱

캐싱은 자료를 임시 메모리에 저장하는 과정으로 추후에 해당 자료가 다시 필요할 때 쉽게 해당 자료를 얻을 수 있다.

캐싱의 목표는 히트를 최대화하고 미스를 최소화하는 것이다.

### 캐싱 이해하기

- 시간적 지역성: 최근에 접근한 메모리 위치를 다시 접근할 가능성이 높다.
- 공간적 지역성: 최근에 접근한 메모리 위치 주변의 위치를 다시 접근할 가능성이 높다.

최적의 캐싱 알고리즘은 캐시에서 향후에 가장 나중에 사용될 부분을 신규로 삽입하고자 하는 항목으로 교체할 수 있어야 한다.

### LFU 캐싱

LFU 캐싱은 운영체제가 메모리를 관리하기 위해 사용하는 캐싱 알고리즘이다.  
운영체제는 어떤 블록이 메모리에서 참조된 횟수를 관리한다.  
설계상 캐시가 자신의 한계를 초과하는 경우 운영체제는 가장 참조 빈도가 낮은 항목을 삭제한다.  
LFU 캐시를 가장 쉽게 구현하는 방법은 캐시에 로딩되는 모든 블록에 카운터를 할당한 다음 해당 블록에 대한 참조가 생성될 때마다 카운터를 증가시키는 것이다.
캐시가 한계를 초과하면 운영체제는 가장 카운터가 낮은 블록을 찾아서 캐시에서 제거한다.

LFU 캐시는 이중 연결 리스트를 사용해 O(1) 시간에 항목을 제거한다.  
LFU에서 이중 연결 노드에는 freqCount 속성이 있다.  
freqCount 속성은 해당 노드가 삽입된 다음에 해당 노드에 얼마나 자주 접근하거나 해당 노드를 얼마나 자주 설정했는지 나타낸다.

LFU 캐시에는 keys와 freq라는 두 개의 해시 테이블이 있다.  
ferq의 키는 빈도를 나타내고 각 항목은 이중 연결 리스트 클래스의 인스턴스이다.  

keys는 O(1) 시간에 노드를 접근할 수 있도록 각 이중 연결 리스트 노드를 저장한다.

- LFU.js

### LRU 캐싱

LRU 캐싱은 가장 오래된 항목을 먼저 제거하는 캐싱 알고리즘이다.  
따라서 교체될 항목은 가장 오래전에 접근한 항목이다.  
캐시의 항목에 접근하면 해당 항목은 리스트의 뒤로 이동한다.  
캐시에 없는 페이지에 접근하면 가장 앞에 있는 항목이 제거되고 신규 항목이 리스트의 가장 뒤에 삽입된다.

LRU 알고리즘을 구현하기 위해서는 어떤 노드가 언제 사용됐는지를 관리해야 한다.  
이를 구현하기 위해 LRU 캐시는 이중 연결 리스트와 해시 테이블을 사용해 구현된다.

헤드를 추적하기 위해서는 이중 연결 리스트가 필요하다.  
이중 연결 리스트가 필요한 이유는 가장 최근에 사용한 항목을 관리하기 위함이다.  
새로운 자료가 추가될 때마다 이중 연결 리스트의 크기를 초과할 때까지 헤드를 위로 이동시킨다.  
그런 식으로 이동하다가 리스트의 크기를 초과하게 되면 가장 오래된 자료가 제거된다.

- LRU.js

### 요약

| 알고리즘 | 비고                                                   |
| -------- | ------------------------------------------------------ |
| 최적     | 구현 불가능                                            |
| LFU      | 어떤 자료가 특정 시점에 자주 사용된 경우 성능이 떨어짐 |
| LRU      | 이중 연결 리스트와 해시맵을 사용                       |