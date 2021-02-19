function LRUNode(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
}

function LRUCache(capacity) {
    this.keys = {};
    this.capacity = capacity;
    this.head = new LRUNode("", null);
    this.tail = new LRUNode("", null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

LRUCache.prototype.removeNode = function (node) {
    var prev = node.prev, next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.addNode = function (node) {
    var realTail = this.tail.prev;
    realTail.next = node;

    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
}

LRUCache.prototype.get = function (key) {
    var node = this.keys[key];

    if (node == undefined) {
        return null;
    } else {
        this.removeNode(node);
        this.addNode(node);
        return node.data;
    }
}

LRUCache.prototype.set = function (key, value) {
    var node = this.keys[key];

    if (node) this.removeNode(node);

    var newNode = new LRUNode(key, value);

    this.addNode(newNode);
    this.keys[key] = newNode;

    // 노드 제거
    if (Object.keys(this.keys).length > this.capacity) {
        var realHead = this.head.next;
        this.removeNode(realHead);
        delete this.keys[realHead.key];
    }
}

var myLRU = new LRUCache(5);

myLRU.set(1, 1); // 1
myLRU.set(2, 2); // 1 <-> 2
myLRU.set(3, 3); // 1 <-> 2 <-> 3
myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5

myLRU.get(1); // 2 <-> 3 <-> 4 <-> 5 <-> 1
myLRU.get(2); // 3 <-> 4 <-> 5 <-> 1 <-> 2

myLRU.set(6, 6); // 4 <-> 5 <-> 1 <-> 2 <-> 6
myLRU.set(7, 7); // 5 <-> 1 <-> 2 <-> 6 <-> 7
myLRU.set(8, 8); // 1 <-> 2 <-> 6 <-> 7 <-> 8

console.log(myLRU);