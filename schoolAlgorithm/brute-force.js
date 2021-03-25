// 입력값 중 최소값을 구하는 문제

function solution(n) {
    let min = 10000;

    for (let i = 0; i < n.length; i++) {
        if (n[i] < min) min = n[i];
    }

    return min;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));