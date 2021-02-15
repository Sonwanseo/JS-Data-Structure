function isPalindromeRecursive(word) {
    return isPalindromeHelper(word, 0, word.length - 1);
}

function isPalindromeHelper(word, beginPos, endPos) {
    if (beginPos >= endPos) return true;
    if (word.charAt(beginPos) != word.charAt(endPos)) return false;
    else return isPalindromeHelper(word, beginPos + 1, endPos - 1);
}

isPalindromeRecursive('hi'); // false
isPalindromeRecursive('iii'); // true
isPalindromeRecursive('ii'); // true
isPalindromeRecursive('aibohphobia'); // true
isPalindromeRecursive('racecar'); // true

// 시간 복잡도: O(n)
// 공간 복잡도: O(n)