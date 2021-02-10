var board =
    `%e%%%%%%%%%\n
 %...%.%...%\n
 %.%.%.%.%%%\n
 %.%.......%\n
 %.%%%%.%%.%\n
 %.%.....%.%\n
 %%%%%%%%%x%`;
var rows = board.split('\n');

function generateColumnArr(arr) {
    return arr.split("");
}
var mazeMatrix = rows.map(generateColumnArr);

function findChar(char, mazeMatrix) {
    var row = mazeMatrix.length, column = mazeMatrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (mazeMatrix[i][j] == char) {
                return [i, j];
            }
        }
    }
}

function printMatrix(matrix) {
    var mazePrintStr = "", row = matrix.length, column = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            mazePrintStr += mazeMatrix[i][j];
        }

        mazePrintStr += "\n";
    }
    console.log(mazePrintStr);
}

function mazePathFinder(mazeMatrix) {
    var row = mazeMatrix.length,
        column = mazeMatrix[0].length,
        startPos = findChar('e', mazeMatrix),
        endPos = findChar('x', mazeMatrix);

    path(startPos[0], startPos[1]);

    function path(x, y) {
        if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
            return false;
        }
        // 찾았다.
        if (x == endPos[0] && y == endPos[1]) {
            return true;
        }
        if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
            return false;
        }
        // 현재 위치를 표시한다.
        mazeMatrix[x][y] = '+';
        printMatrix(mazeMatrix);

        if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
            return true;
        }
        mazeMatrix[x][y] = '.';
        return false;
    }
}

// 시간 복잡도: O(mn)
// 공간 복잡도: O(1)