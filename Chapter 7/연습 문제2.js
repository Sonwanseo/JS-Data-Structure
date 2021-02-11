var RED = 0, GREEN = 1, BLUE = 2;

function redGreenBlueCount(arr) {
    var counter = new Array(3).fill(0);

    for (let i = 0; i < arr.length; i++) {
        var curr = arr[i];
        if (curr == RED) {
            counter[RED]++;
        } else if (curr == GREEN) {
            counter[GREEN]++;
        } else if (curr == BLUE) {
            counter[BLUE]++;
        }
    }

    return counter;
}

redGreenBlueCount([0, 1, 1, 1, 2, 2, 2]); // [1, 3, 3]

// 필요하지 않은 곳에 전역변수가 사용됐다.


function redGreenBlueCount(arr) {
    var RED = 0, GREEN = 1, BLUE = 2, counter = new Array(3).fill(0);

    for (let i = 0; i < arr.length; i++) {
        var curr = arr[i];
        if (curr == RED) {
            counter[RED]++;
        } else if (curr == GREEN) {
            counter[GREEN]++;
        } else if (curr == BLUE) {
            counter[BLUE]++;
        }
    }

    return counter;
}

redGreenBlueCount([0, 1, 1, 1, 2, 2, 2]); // [1, 3, 3]