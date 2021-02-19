function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this._root = null;
}

// 선순위 순회
BinaryTree.prototype.traversePreOrder = function () {
    traversePreOrderHelper(this._root);

    function traversePreOrderHelper(node) {
        if (!node) return;
        console.log(node.value);
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

// 중순위 순회
BinaryTree.prototype.traverseInOrder = function () {
    traverseInOrderHelpder(this._root);

    function traverseInOrderHelper(node) {
        if (!node) return;
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrderIterative = function () {
    var current = this._root, s = [], done = false;

    while (!done) {
        // 현재 노드의 가장 왼쪽에 있는 노드로 이동한다.
        if (current != null) {
            // 현재 노드의 왼쪽 하위 트리를 순회하기 전에
            // 포인터가 스택의 트리 노드를 가리키도록 한다.
            s.push(current);
            current = current.left;
        } else {
            if (s.length) {
                current = s.pop();
                console.log(current.value);
                current = current.right;
            } else {
                done = true;
            }
        }
    }
}

// 후순위 순회
BinaryTree.prototype.traversePostOrder = function () {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node) {
        if (node.left) traversePostOrderHelper(node.left);
        if (node.right) traversePostOrderHelper(node.right)
        console.log(node.value);
    }
}

BinaryTree.prototype.traversePostOrderIterative = function () {
    // 두 개의 스택을 만든다.
    var s1 = [], s2 = [];

    // 루트를 첫 번째 스택에 추가한다.
    s1.push(this._root);

    // 첫 번째 스택이 비어 있는 동안 계속 실행한다.
    while (s1.length) {
        // s1으로부터 항목을 꺼내 s2에 추가한다.
        var node = s1.pop();
        s2.push(node);

        // 제거된 항목의 왼쪽 자식과 오른쪽 자식을 s1에 추가한다.
        if (node.left) s1.push(node.left);
        if (node.right) s1.push(node.right);
    }
    // 두 번째 스택의 모든 항목을 출력한다.
    while (s2.length) {
        var node = s2.pop();
        console.log(node.value);
    }
}

// 단계순위 순회(BFS)
BinaryTree.prototype.traverseLevelOrder = function () {
    var root = this._root, queue = [];

    if (!root) return;
    queue.push(root);

    while (queue.length) {
        var temp = queue.shift();
        console.log(temp.value);
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right)
    }
}