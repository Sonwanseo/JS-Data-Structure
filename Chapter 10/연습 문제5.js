function wordCount(sentence) {
    // 마침표가 단어로 인식되지 않도록 마침표를 제거한다,
    const wordsArray = sentence.replace(/[.]/g, "").split(" "), occurenceList = {}, answerList = {};

    for (let i = 0; i < wordsArray.length; i++) {
        var currentWord = wordsArray[i];
        // 존재하지 않는다. 따라서 첫 번째 등장으로 설정한다.
        if (!occurenceList[currentWord]) occurenceList[currentWord] = 1;
        else occurenceList[currentWord]++; // 등장 횟수를 증가한다.
    }

    let arrayTemp = [];
    // 값과 키를 고정 배열로 저장한다.
    for (let prop in occurenceList) arrayTemp.push([occurenceList[prop], prop]);

    function sortcomp(a, b) {
        return b[0] - a[0]; // 배열의 첫 번째 항목을 비교한다.
    }

    arrayTemp.sort(sortcomp); // 정렬

    for (let i = 0; i < arrayTemp.length; i++) {
        var current = arrayTemp;
        answerList[current[1]] = current[0]; // 키-값 쌍
    }
    return answerList;
}
wordCount("practice makes perfect. get perfect by practice. just practice");

// 시간 복잡도: O(nlog2(n))
// 공간 복잡도: O(n)