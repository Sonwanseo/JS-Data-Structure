function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
    return this.size == 0;
}

SinglyLinkedList.prototype.insert = function (value) {
    if (this.head === null) {
        this.head = new SinglyLinkedListNode(value);
    } else {
        const temp = this.head;
        this.head = new SinglyLinkedListNode(value);
        this.head.next = temp;
    }
    this.size++;
}

SinglyLinkedList.prototype.remove = function (value) {
    let currentHead = this.head;

    if (currentHead.data == value) {
        this.head = currentHead.next;
        this.size--;
    } else {
        let prev = currentHead;
        while (currentHead.next) {
            if (currentHead.data == value) {
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break;
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        if (currentHead.data == value) {
            prev.next == null;
        }
        this.size--;
    }
}

SinglyLinkedList.prototype.deleteAtHead = function () {
    let toReturn = null;

    if (this.head !== null) {
        toReturn = this.head.data;
        this.head = this.head.next;
        this.size--;
    }

    return toReturn;
}

SinglyLinkedList.prototype.find = function (value) {
    let currentHead = this.head;

    while (currentHead.next) {
        if (currentHead.data == value) return true;
        currentHead = currentHead.next;
    }

    return false;
}

var sll = new SinglyLinkedList();
sll.insert(1); // 현재 연결 리스트: 1 -> null
sll.insert(12); // 현재 연결 리스트: 12 -> 1 -> null
sll.insert(20); // 현재 연결 리스트: 20 -> 12 -> 1 -> null
sll.remove(12); // 현재 연결 리스트: 20 -> 1-> null
sll.deleteAtHead(); // 현재 연결 리스트: 1 -> null