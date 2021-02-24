function buildBadMatchTable(str) {
    var tableObj = {}, strLength = str.length;
    for (let i = 0; i < strLength - 1; i++) tableObj[str[i]] = strLength - 1 - i;
    if (tableObj[str[strLength - 1]] == undefined) tableObj[str[strLength - 1]] = strLength;
    return tableObj;
}

function boyerMoore(str, pattern) {
    var BadMatchTable = buildBadMatchTable(pattern),
        offset = 0,
        patternLastIndex = pattern.length - 1,
        scanIndex = patternLastIndex,
        maxOffset = str.length - pattern.length;

    // 문자열과 패턴의 길이 차가 maxOffset보다 큰 경우 해당 패턴을 찾지 못한 것이다.
    while (offset <= maxOffset) {
        scanIndex = 0;
        while (pattern[scanIndex] == str[scanIndex + offset]) {
            if (scanIndex == patternLastIndex) return offset; // 현재 인덱스에서 패턴 발견
            scanIndex++;
        }
        var badMatchString = str[offset + patternLastIndex];
        if (BadMatchTable[badMatchString]) {
            // 불일치 표에 존재하는 경우 표의 값만큼 증가한다.
            offset += BadMatchTable[badMatchString];
        } else {
            offset += 1;
        }
    }

    return -1;
}

boyerMoore('jellyjam', 'jam'); // 5. 인덱스 5에서 패턴 발견 의미
boyerMoore('jellyjam', 'jelly'); // 0. 인덱스 0에서 패턴 발견 의미
boyerMoore('jellyjam', 'sam'); // -1. 패턴이 존재하지 않음을 의미