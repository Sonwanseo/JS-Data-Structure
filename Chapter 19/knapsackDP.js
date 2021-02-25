function knapsackDP(index, weights, values, target, matrixDP) {
    var result = 0;

    // DP part
    if (matrixDP[index + '-' + target]) return matrixDP[index + '-' + target];

    if (index <= -1 || target <= 0) {
        result = 0;
    } else if (weights[index] > target) {
        result = knapsackDP(index - 1, weights, values, target, matrixDP);
    } else {
        var current = knapsackDP(index - 1, weights, values, target, matrixDP), currentPlusOther = values[index] + knapsackDP(index - 1, weights, values, target - weights[index], matrixDP);
        result = Math.max(current, currentPlusOther);
    }
    matrixDP[index + '-' + target] = result;
    return result;
}
knapsackDP(4, weights, values, target, {});