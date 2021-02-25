function knapsackNaive(index, weight, values, target) {
    var result = 0;

    if (index <= -1 || target <= 0) {
        result = 0
    } else if (weights[index] > target) {
        result = knapsackNaive(index - 1, weights, values, target);
    } else {
        // 첫 번째 경우:
        var current = kanpsackNaive(index - 1, weights, values, target);
        // 두 번째 경우:
        var currentPlusOther = values[index] + knapsackNaive(index - 1, weights, values, target - weights[index]);

        result = Math.max(current, currentPlusOther);
    }
    return result;
}

var weights = [1, 2, 4, 2, 5], values = [5, 3, 5, 3, 2], target = 10;
knapsackNaive(4, weights, values, target);