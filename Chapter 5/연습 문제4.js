var arr1 = [1, 5, 5, 10];
var arr2 = [3, 4, 5, 5, 10];
var arr3 = [5, 5, 10, 20];
var output = [5, 10];

function commonElements(kArray) {
    var hashmap = {}, last, answer = [];

    for (let i = 0; i < kArray.length; i++) {
        var currentArray = kArray[i];
        last = null;
        for (let j = 0; j < currentArray.length; j++) {
            var currentElement = currentArray[j];
            if (last != currentElement) {
                if (!hashmap[currentElement]) {
                    hashmap[currentElement] = 1;
                } else {
                    hashmap[currentElement]++;
                }
            }
            last = currentElement;
        }
    }

    // hashmap을 순회한다.
    for (let prop in hashmap) {
        if (hashmap[prop] == kArray.length) {
            answer.push(parseInt(prop));
        }
    }
    return answer;
}

console.log(commonElements([[1, 2, 3], [1, 2, 3, 4], [1, 2]]))