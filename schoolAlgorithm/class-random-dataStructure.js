const dataStructresList = ['선택정렬', '삽입정렬', '버블정렬', '퀵정렬', '병합정렬', '해시', '스택', '큐', '힙', '그리디', '그래프', '동적계획법', '이분탐색', '완전탐색', '너비우선탐색', '깊이우선탐색'];

// 랜덤 숫자 반환
function getRandomNum() {
    return Math.floor(Math.random() * 16 + 1);
}

// 1 ~ 16으로 이루어진 랜덤 숫자를 포함한 배열 생성
function getRandomList() {
    let randomList = [], temp;

    for (let i = 0; i < 16; i++) {
        while (true) {
            temp = getRandomNum();
            if (randomList.indexOf(temp) == -1) break;
        }
        randomList.push(temp);
    }

    return randomList
}

// 배열 5개 생성
function get5RandomList() {
    let randomList = [];

    for (let i = 0; i < 5; i++) {
        randomList[i] = getRandomList();
    }

    return randomList;
}

// 5개 배열을 4개로 압축(마지막 배열은 4등분하여 각 배열 마지막에 추가)
function compress4RandomList() {
    let random5list = get5RandomList();

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            random5list[i].push(random5list[4].splice(0, 1).toString() * 1);
        }
    }

    random5list.pop();
    return random5list;
}

// 배열 요소들을 자료구조 텍스트로 변환
function convertNumToText() {
    let randomList = compress4RandomList(), convertedList = new Array(4);

    for (let i = 0; i < 4; i++) convertedList[i] = new Array();


    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 20; j++)
            convertedList[i].push(dataStructresList[randomList[i][j] - 1]);
    }

    return convertedList;
}

// 출력
function printRandomList() {
    const randomList = convertNumToText();

    for (let i = 0; i < 4; i++) {
        console.log(`${i + 1}주차`);
        for (let j = 0; j < 20; j++) {
            console.log(`${j + 1}: ${randomList[i][j]}`)
        }
        console.log();
    }
}

printRandomList();