var array1 = [12, 3, 13, 4, 2, 40, 23];

function getKthBiggestElement(array, k) {
    var maxH = new MaxHeap();
    for (let i = 0; i < array.length; i++) maxH.add(array[i]);
    for (let i = 1; i < k; i++) maxH.poll();
    return maxH.poll();
}

getKthBiggestElement(array1, 2); // 23
getKthBiggestElement(array1, 1); // 40
getKthBiggestElement(array1, 7); // 2