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

Heap.prototype.leftChildIndex = function (index) {
    return index * 2 + 1;
}

Heap.prototype.rightChildIndex = function (index) {
    return index * 2 + 2;
}

Heap.prototype.parent = function (index) {
    return this.items[this.parentIndex[index]];
}

Heap.prototype.leftChild = function (index) {
    return this.items[this.leftChildIndex(index)];
}

Heap.prototype.rightChild = function (index) {
    return this.items[this.rightChildIndex(index)];
}

Heap.prototype.peek = function () {
    return this.items[0];
}

Heap.prototype.size = function () {
    return this.items.length;
}