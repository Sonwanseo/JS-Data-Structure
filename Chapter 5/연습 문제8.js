var matrix = [[1, 0, 1], [0, 0, 1], [1, 1, 1]];

function rotateMatrix90Left(mat) {
    var N = mat.length;

    // 항목들을 하나씩 처리한다.
    for (let x = 0; x < N / 2; x++) {
        // 현재 항목을 기준으로
        // 네 개의 항목들(상, 하, 좌, 우)로 처리한다.
        for (let y = x; y < N - x - 1; y++) {
            // 현재 칸의 값을 임시(temp) 변수에 저장한다.
            var temp = mat[x][y];

            // 현재 항목 기준으로 오른쪽 값을 현재 항목 기준 위쪽 칸에 할당한다.
            mat[x][y] = mat[y][N - 1 - x];

            // 현재 항목 기준 아래쪽 값을 현재 항목 기준 오른쪽 칸에 할당한다.
            mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

            // 현재 항목 기준 왼쪽 값을 현재 항목 기준 아래쪽 칸에 할당한다.
            mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

            // 임시 변수의 값을 현재 항목 기준 왼쪽 칸에 할당한다.
            mat[N - 1 - y][x] = temp;
        }
    }
}
rotateMatrix90Left(matrix);
console.log(matrix);

// 시간 복잡도: O(mn)
// 공간 복잡도: O(1)