function sortableStack(size) {
    this.size = size;

    this.mainStack = new Stack();
    this.sortedStack = new Stack();

    // 무작위 정수로 스택을 초기화한다.
    for (let i = 0; i < this.size; i++) {
        this.mainStack.push(Math.floor(Math.random() * 11));
    }
}

sortableStack.prototype.sortStackDescending = function () {
    while (!this.mainStack.isEmpty()) {
        var temp = this.mainStack.pop();

        while (!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp) this.mainStack.push(this.sortedStack.pop());

        this.sortedStack, push(temp);
    }
}

var ss = new sortableStack(10);
console.log(ss); // [ 8, 3, 4, 4, 1, 2, 0, 9, 7, 8 ]
ss.sortStackDescending();
console.log(ss.sortedStack); // [ 9, 8, 8, 7, 4, 4, 3, 2, 1, 0 ]