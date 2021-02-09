function findSum(arr, weight) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === weight) {
                return [i, j];
            }
        }
    }
    return -1;
}

// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)

function findSumBetter(arr, weight) {
    let hashtable = {};

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i], difference = weight - currentElement;

        // 이미 값이 존재하는지 확인한다.
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[currentElement]];
        } else {
            // 인덱스를 저장한다.
            hashtable[difference] = i;
        }
    }

    return -1;
}

// 시간 복잡도: O(n)
// 공간 복잡도: O(n)

console.log(findSum([1, 2, 3, 4, 5], 8))