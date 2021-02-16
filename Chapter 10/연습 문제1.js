function sqrtIntNative(number) {
    if (number == 0 || number == 1) return number;

    let index = 1, square = 1;

    while (square < number) {
        if (square == number) return square;

        index++;
        square = index * index;
    }

    return index;
}
sqrtIntNative(9);

// 시간 복잡도: O(n)

// 이진 검색 알고리즘 버전
function sqrtInt(number) {
    if (number == 0 || number == 1) return number;

    let start = 1, end = number, ans;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (mid * mid == number) return mid;

        if (mid * mid < number) {
            start = mid + 1; // 큰 쪽을 사용한다.
            ans = mid;
        } else {
            end = mid - 1; // 작은 쪽을 사용한다.
        }
    }

    return ans;
}
sqrtInt(9);

// 시간 복잡도: O(log2(n))

function sqrtDouble(number) {
    const threshold = 0.1;

    let upper = number, lower = 0, middle;

    while (upper - lower > threshold) {
        middle = (upper + lower) / 2;

        if (middle * middle > number) upper = middle;
        else lower = middle;
    }

    return middle;
}
sqrtDouble(9); // 3.0234375