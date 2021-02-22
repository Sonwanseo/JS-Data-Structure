function Heap() {
    this.items = [];
}

Heap.prototype.swap = function (index1, index2) {
    var temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.parentIndex = function (index) {
    return Math.floor((index - 1) / 2);
}

Heap.prototype.leftChildrenIndex = function (index) {
    return index * 2 + 1;
}

Heap.prototype.rightChildrenIndex = function (index) {
    return index * 2 + 2;
}

Heap.prototype.parent = function (index) {
    return this.items[this.parentIndex[index]];
}

Heap.prototype.leftChild = function (index) {
    return this.items[this.leftChildrenIndex(index)];
}

Heap.prototype.rightChild = function (index) {
    return this.items[this.rightChildrenIndex(index)];
}

Heap.prototype.peek = function () {
    return this.items[0];
}

Heap.prototype.size = function () {
    return this.items.length;
}

function MinHeap() {
    this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.add = function (item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
}

MinHeap.prototype.poll = function () {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

MinHeap.prototype.bubbleDown = function () {
    var index = 0;
    while (this.leftChild(index) && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
        var smallerIndex = this.leftChildrenIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            smallerIndex = this.rightChildrenIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function () {
    var index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

var mh = new MinHeap();
mh.add(12);
mh.add(10);
mh.add(5);
mh.add(100);
mh.add(8);

console.log(mh.poll()); // 1
console.log(mh.poll()); // 5
console.log(mh.poll()); // 8
console.log(mh.poll()); // 10
console.log(mh.poll()); // 100