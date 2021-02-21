function AVLTree(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function () {
    if (this.node == null) {
        this.depth = 1;
    }

    if (this.left != null) {
        this.depth = this.left.depth + 1;
    }

    if (this.right != null && this.depth <= this.right.depth) {
        this.depth = this.right.depth + 1;
    }
}

AVLTree.prototype.rotateRR = function () {
    var valueBefore = this.value;
    var leftBefore = this.left;
    this.value = this.right.value;

    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;

    this.left.setDepthBasedOnChildren();
    this.setDepthBasedOnChildren();
}

AVLTree.prototype.rotateLL = function () {
    var valueBefore = this.value;
    var rightBefore = this.right;
    this.value = this.left.value;

    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;

    this.right.setDepthBasedOnChildren();
    this.setDepthBasedOnChildren();
}

AVLTree.prototype.balance = function () {
    var ldepth = this.left == null ? 0 : this.left.depth;
    var rdepth = this.right == null ? 0 : this.right.depth;

    if (ldepth > rdepth + 1) {
        // LR 혹은 LL 회전
        var lldepth = this.left.left == null ? 0 : this.left.left.depth;
        var lrdepth = this.left.right == null ? 0 : this.left.right.depth;

        if (lldepth < lrdepth) {
            this.left.rotateRR();
        }
        this.rotateLL();
    } else if (ldepth + 1 < rdepth) {
        var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
        var rldepth = this.right.left == null ? 0 : this.right.left.depth;

        if (rldepth > rrdepth) {
            this.right.rotateLL();
        }
        this.rotateRR();
    }
}

AVLTree.prototype.insert = function (value) {
    var childInserted = false;

    if (value == this.value) {
        return false;
    } else if (value < this.value) {
        if (this.left == null) {
            this.left = new AVLTree(value);
            childInserted = true;
        } else {
            childInserted = this.left.insert(value);
            if (childInserted == true) this.balance();
        }
    } else if (value > this.value) {
        if (this.right == null) {
            this.right = new AVLTree(value);
            childInserted = true;
        } else {
            childInserted = this.right.insert(value);

            if (childInserted == true) this.balance();
        }
    }

    if (childInserted == true) this.setDepthBasedOnChildren();
    return childInserted;
}

AVLTree.prototype.remove = function (value) {
    return deleteRecursively(this, value);

    function deleteRecursively(root, value) {
        if (!root) return null;
        else if (value < root.value) root.left = deleteRecursively(root.left, value);
        else if (value > root.value) root.right = deleteRecursively(root.right, value);
        else {
            // 자식이 없는 경우
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.right;
                return root;
            } else {
                var temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        root.setDepthBasedOnChildren(); // 일반적인 이진 검색 트리와의 유일한 차이점
        return root;
    }

    function findMin(root) {
        while (root.left) root = root.left;
        return root;
    }
}

var avlTest = new AVLTree(1, "");
avlTest.insert(2);
avlTest.insert(3);
avlTest.insert(4);
avlTest.insert(5);
avlTest.insert(123);
avlTest.insert(203);
avlTest.insert(2222);
console.log(avlTest);