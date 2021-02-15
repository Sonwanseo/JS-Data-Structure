function checkDuplicates(arr) {
    const mySet = new Set(arr);
    return mySet.size < arr.length;
}
checkDuplicates([1, 2, 3, 4, 5]); // false
checkDuplicates([1, 1, 2, 3, 4, 5]); // true

// 시간 복잡도: O(n)
// 공간 복잡도: O(n)