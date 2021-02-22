function MedianHeap() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
}

MedianHeap.prototype.add = function (value) {
    if (value > this.median()) this.minHeap.add(value);
    else this.maxHeap.add(value);

    // 재구성
    if (this.minHeap.size() - this.maxHeap.size() > 1) this.maxHeap.add(this.minHeap.poll());

    if (this.maxHeap.size() - this.minHeap.size() > 1) this.minHeap.add(this.maxHeap.poll());
}

MedianHeap.prototype.median = function () {
    if (this.minHeap.size() == 0 && this.maxHeap.size() == 0) return Number.NEGATIVE_INFINITY;
    else if (this.minHeap.size() == this.maxHeap.size()) return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    else if (this.minHeap.size() > this.maxHeap.size()) return this.minHeap.peek();
    else this.maxHeap.peek();
}

var medianH = new MedianHeap();

medianH.add(12);
console.log(medianH.median()); // 12
medianH.add(2);
console.log(medianH.median()); // 7
medianH.add(23);
console.log(medianH.median()); // 12
medianH.add(13);
console.log(medianH.median()); // 12.5