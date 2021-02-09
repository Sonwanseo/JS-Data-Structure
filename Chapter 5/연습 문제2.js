function arraySlice(array, beginIndex, endIndex) {
    // 전달된 매개변수가 없으면 그냥 배열을 반환한다.
    if (!beginIndex && !endIndex) {
        return array;
    }

    // 시작 인덱스만 존재하는 경우 endIndex를 배열의 크기로 설정한다.
    if (!endIndex) endIndex = array.length;

    let partArray = [];

    // 시작 인덱스와 끝 인덱스 모두 지정된 경우 배열의 일부를 반환한다.
    for (let i = beginIndex; i < endIndex; i++) {
        partArray.push(array[i]);
    }

    return partArray;
}
arraySlice([1, 2, 3, 4], 1, 2); // [2]
arraySlice([1, 2, 3, 4], 2, 4); // [3, 4])

// 시간 복잡도: O(n)
// 공간 복잡도: O(n)