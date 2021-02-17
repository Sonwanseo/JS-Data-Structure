function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
    return this.array.slice();
}

Stack.prototype.isEmpty = function () {
    return this.array.length == 0;
}

Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}

Stack.prototype.push = function (value) {
    this.array.push(value);
}

Stack.prototype.pop = function () {
    return this.array.pop();
}

function stackAccessNthTopNode(stack, n) {
    const bufferArray = stack.getBuffer();
    if (n <= 0) throw 'error';

    let bufferStack = new Stack(bufferArray);

    while (--n !== 0) bufferStack.pop();

    return bufferStack.pop();
}

function stackSearch(stack, element) {
    let bufferArray = stack.getBuffer();

    let bufferStack = new Stack(bufferArray); // 버퍼 스택으로 복사한다.

    while (!bufferStack.isEmpty()) {
        if (bufferStack.pop() == element) {
            return true;
        }
    }
    return false;
}

// 스택 클래스의 인스턴스
let stack = new Stack();