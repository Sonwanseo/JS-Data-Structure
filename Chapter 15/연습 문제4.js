function isMirrorTrees(tree1, tree2) {
    // 기저 경우, 둘 다 비었다.
    if (!tree1 && !tree2) return true;

    // 둘 중 하나가 비었다. 둘 중 하나만 비었기 때문에 대칭이 아니다.
    if (!tree1 || !tree2) return false;

    // 둘 다 비지 않았기 때문에 재귀적으로 비교한다.
    // 한 트리의 왼쪽 하위 트리와 다른 트리의 오른쪽 하위 트리를 전달한다.

    var checkLeftwithRight = isMirrorTrees(tree1.left, tree2.right), checkRightwithLeft = isMirrorTrees(tree2.right, tree1.left);

    return tree1.value == tree2.value && checkLeftwithRight && checkRightwithLeft;
}

var node1 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
};

var node2 = {
    value: 3,
    left: {
        value: 2
    },
    right: {
        value: 1
    }
};

var node3 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2,
        left: {
            value: 2.5
        }
    }
};

console.log(isMirrorTrees(node1, node2)); // true
console.log(isMirrorTrees(node2, node3)); // false