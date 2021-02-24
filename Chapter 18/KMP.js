function longestPrefix(str) {
    var prefix = new Array(str.length), maxPrefix = 0;
    prefix[0] = 0;
    for (let i = 1; i < str.length; i++) {
        while (str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0) maxPrefix = prefix[maxPrefix - 1];
        if (str.charAt(maxPrefix) === str.charAt(i)) maxPrefix++;
        prefix[i] = maxPrefix;
    }
    return prefix;
}

function KMP(str, pattern) {
    var prefixTable = longestPrefix(pattern), patternIndex = 0, strIndex = 0;

    while (strIndex < str.length) {
        if (str.charAt(strIndex) != pattern.charAt(patternIndex)) {
            // 경우 1: 두 문자가 다르다.
            if (patternIndex != 0) patternIndex = prefixTable[patternIndex - 1];
            else strIndex++;
        } else if (str.charAt(strIndex) == pattern.charAt(patternIndex)) {
            // 경우 2: 두 문자가 동일하다.
            strIndex++;
            patternIndex++;
        }
        if (patternIndex == pattern.length) return true;
    }

    return false;
}

console.log(KMP('sammiebae', 'bae')); // true
console.log(KMP('sammiebae', 'sammie')); // true
console.log(KMP('sammiebae', 'sammiebaee')); // false