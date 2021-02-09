function medianOfArray(array) {
    let length = array.length;
    // 홀수
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];
    } else { // 짝수
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}

function medianOfArray(array) {
    let length = array.length;
    // 홀수
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];
    } else { // 짝수
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}

// arr2이 더 큰 배열이다.
function medianOfTwoSortedArray(arr1, arr2, pos) {
    if (pos <= 0) return -1;
    if (pos == 1) return (arr1[0] + arr2[0]) / 2;
    if (pos == 2) return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;

    let median1 = medianOfArray(arr1), median2 = medianOfArray(arr2);

    if (median1 == median2) return median1;

    let evenOffset = pos % 2 == 0 ? 1 : 0,
        offsetMinus = Math.floor(pos / 2) - evenOffset,
        offsetPlus = pos - Math.floor(pos / 2) + evenOffset;

    if (median1 < median2) {
        return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(0, -offsetMinus), offsetPlus);
    } else {
        return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(0, -offsetMinus), offsetPlus);
    }
}

console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3)); // 3.5
console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3)); // 28
console.log(medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3)); // 2.5

// 시간 복잡도: O(log2(n))