function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.insert = function (value) {
    var thisNode = { left: null, right: null, value: value };
    if (!this._root) {
        this._root = thisNode;
    } else {
        var currentRoot = this._root;
        while (true) {
            if (currentRoot.value > value) {
                if (currentRoot.left != null) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = this.Node;
                    break;
                }
            } else if (currentRoot.value < value) {
                if (currentRoot.right != null) {
                    currentRoot = currentRoot.right;
                } else {
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                // 현재 루트와 값이 같은 경우
                break;
            }
        }
    }
}

BinarySearchTree.prototype.remove = function (value) {
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            if (!root.left && !root.right) { // 첫 번째 경우
                return null;
            } else if (!root.left) { // 두 번째 경우
                root = root.right;
                return root;
            } else if (!root.right) { // 두 번째 경우
                root = root.left;
                return root;
            } else {
                var temp = findMin(root.right); // 세 번째 경우
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    function findMin(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
}

BinarySearchTree.prototype.findNode = function (value) {
    var currentNode = this._root, found = false;

    while (currentNode) {
        if (currentNode.value > value) {
            currentNode = currentNode.left;
        } else if (currentNode.value < value) {
            currentNode = currentNode.right
        } else {
            found = true;
            break;
        };
    }
    return found;
}

var bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(2);
bst.findNode(3); // true
bst.findNode(5); // false