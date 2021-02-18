function reverseSingleLinkedList(sll) {
    let node = sll.head, prev = null, temp;

    while (node) {
        temp = node.next;
        node.next = prev;
        prev = node;

        if (!temp) break;

        node = temp;
    }

    return node;
}

// 시간 복잡도: O(n)
// 공간 복잡도: O(1)