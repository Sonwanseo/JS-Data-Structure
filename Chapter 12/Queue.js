function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
    return this.array.slice();
}

Queue.prototype.isEmpty = function () {
    return this.array.length == 0;
}

Queue.prototype.peek = function () {
    return this.array[0];
}

Queue.prototype.enqueue = function (value) {
    return this.array.push(value);
}

Queue.prototype.dequeue = function () {
    return this.array.shift();
}

function queueAccessNthTopNode(queue, n) {
    const bufferArray = queue.getBuffer();
    if (n <= 0) throw 'error';

    let bufferQueue = new Queue(bufferArray);

    while (--n !== 0) bufferQueue.dequeue();

    return bufferQueue.dequeue();
}

function queueSearch(queue, element) {
    const bufferArray = queue.getBuffer();

    let bufferQueue = new Queue(bufferArray);

    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() == element) {
            return true;
        }
    }

    return false;
}

// 큐 클래스의 인스턴스
let queue = new Queue;