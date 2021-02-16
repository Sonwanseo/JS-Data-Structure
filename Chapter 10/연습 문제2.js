function findTwoSum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] + array[i] == sum) return true;
        }
    }

    return false;
}

// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)

function findTwoSum(array, sum) {
    let store = {};

    for (let i = 0; i < array.length; i++) {
        if (store[array[i]]) return true;
        else store[sum - array[i]] = array[i];
    }

    return false;
}

// 시간 복잡도: O(n)
// 공간 복잡도: O(n)