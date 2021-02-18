function deleteDuplicateInUnsortedSll(sll) {
    let track = [];

    let temp = sll.head, prev = null;
    while (temp) {
        if (track.indexOf(temp.data) >= 0) {
            prev.next = temp.next;
            sll.size--;
        } else {
            track.push(temp.data);
            prev = temp;
        }
        temp = temp.next;
    }

    console.log(temp);
}

// 시간 복잡도: O(n^2)
// 공간 복잡도: O(n)

function deleteDuplicateInUnsortedSllBest(sll) {
    let track = {};

    let temp = sll.head, prev = null;
    while (temp) {
        if (track[temp.data]) {
            prev.next = temp.next;
            sll.size--;
        } else {
            track[temp.data] = true;
            prev = temp;
        }
        temp = temp.next;
    }

    console.log(temp);
}

// 시간 복잡도: O(n)
// 공간 복잡도: O(n)