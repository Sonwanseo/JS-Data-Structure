function uniqueList(arr1, arr2) {
    const mySet = new Set(arr1.conact(arr2));
    return Array.from(mySet);
}

uniqueList([1, 1, 2, 2], [2, 3, 4, 5]); // [1, 2, 3, 4, 5]
uniqueList([1, 2], [3, 4, 5]); // [1, 2, 3, 4, 5]
uniqueList([], [2, 2, 3, 4, 5]); // [2, 3, 4, 5]