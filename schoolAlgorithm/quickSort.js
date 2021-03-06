function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
    console.log(items, left, right);
    let index;

    if (items.length > 1) {
        // 피벗 기준 좌우 정렬
        index = partition(items, left, right);

        if (left < index - 1) quickSortHelper(items, left, index - 1);

        if (index < right) quickSortHelper(items, index, right);
    }

    return items;
}

function partition(array, left, right) {
    // 중앙 인덱스를 피벗으로 설정
    let pivot = array[Math.floor((right + left) / 2)];
    console.log(pivot);

    while (left <= right) {
        while (pivot > array[left]) left++;
        while (pivot < array[right]) right--;

        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }

    console.log(left);
    return left;
}

quickSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]