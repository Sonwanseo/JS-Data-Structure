// 문제 1

function someFunction(n) {
    for (let i = 0; i < n * 1000; i++) {
        for (let j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }
}

// 내 답: O(n^2)
// 정답: O(n^2)

// 문제 2

function someFunction(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                for (let l = 0; l < 10; l++) {
                    console.log(i + j + k + l);
                }
            }
        }
    }
}

// 내 답: O(n^3)
// 정답: O(n^3)

// 문제 3

function someFunction(n) {
    for (let i = 0; i < 1000; i++) {
        console.log("hi");
    }
}

// 내 답: O(1000)
// 정답: O(1)

// 문제 4

function someFunction(n) {
    for (let i = 1; i < 10n; i++) {
        console.log(n);
    }
}

// 내 답: O(n)
// 정답: O(n)

// 문제 5

function someFunction(n) {
    for (let i = 1; i < n; i = i * 2) {
        console.log(n);
    }
}

// 내 답: O(log 2 n)
// 정답: O(log 2 n)

// 문제 6

function someFunction(n) {
    while (true) {
        console.log(n);
    }
}

// 내 답: O(무한)
// 정답: O(무한)