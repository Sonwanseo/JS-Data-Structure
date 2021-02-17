function TwoStackQueue() {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (val) {
    this.inbox.push(val);
}

TwoStackQueue.prototype.dequeue = function () {
    if (this.outbox.isEmpty()) {
        while (!this.inbox.isEmpty()) this.outbox.push(this.inbox.pop());
    }

    return this.outbox.pop;
}

let queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // 3

// --------------------------

function QueueStack() {
    this.inbox = new Queue(); // 첫 번째 스택
}

QueueStack.prototype.push = function (val) {
    this.inbox.enqueue(val);
};

QueueStack.prototype.pop = function () {
    const size = this.inbox.array.length - 1;
    let counter = 0, bufferQueue = new Queue();

    while (++counter <= size) bufferQueue.enqueue(this.inbox.dequeue());

    const popped = this.inbox.dequeue();
    this.inbox = bufferQueue;
    return popped;
}

let stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1