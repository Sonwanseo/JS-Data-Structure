function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function () {
    return this.size == 0;
}

DoublyLinkedList.prototype.insertAtHead = function (value) {
    if (this.head === null) {
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
    } else {
        let temp = new DoublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }

    this.size++;
}

DoublyLinkedList.prototype.insertAtTail = function (value) {
    if (this.tail === null) {
        this.tail = new DoublyLinkedListNode(value);
        this.head = this.tail;
    } else {
        let temp = new DoublyLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }

    this.size++;
}

DoublyLinkedList.prototype.deleteAtHead = function () {
    let toReturn = null;

    if (this.haed !== null) {
        toReturn = this.head.data;

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }

    this.size--;
    return toReturn;
}

DoublyLinkedList.prototype.deleteAtTail = function () {
    let toReturn = null;

    if (this.tail !== null) {
        toReturn = this.tail.data;

        if (this.tail === this.head) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
}

DoublyLinkedList.prototype.findStartingHead = function (value) {
    let currentHead = this.head;

    while (currentHead.next) {
        if (currentHead.data == value) {
            return true;
        }
        currentHead = currentHead.next;
    }

    return false;
}

DoublyLinkedList.prototype.findStartingTail = function (value) {
    let currentTail = this.tail;

    while (currentTail.prev) {
        if (currentTail.data == value) {
            return true;
        }
        currentTail = currentTail.prev;
    }

    return false;
}

let dll = new DoublyLinkedList();
dll.insertAtHead(10); // ddl 구조: 테일: 10 헤드: 10
dll.insertAtHead(12); // ddl 구조: 테일: 10 헤드: 12
dll.insertAtHead(20); // ddl 구조: 테일: 10 헤드: 20
dll.insertAtTail(30); // ddl 구조: 테일: 30 헤드: 20
dll.deleteAtTail(); // ddl 구조: 테일: 10 헤드: 20
dll.findStartingHead(10); // true
dll.findStartingHead(100); // false
dll.findStartingTail(10); // true
dll.findStartingTail(100); // false