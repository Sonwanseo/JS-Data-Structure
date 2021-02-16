var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

function sortComparator(a, b) {
    return a.length - b.length;
}

mythical.sort(sortComparator);
// ["magic", "dragon", "slayer", "ned stark", "wizard of oz"]

// 문자열 내 a의 위치에 따라 문자열 항목들을 정렬한다.
var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

function sortComparator(a, b) {
    return a.indexOf("a") - b.indexOf("a");
}

mythical.sort(sortComparator);
// ["magic", "dragon", "slayer", "wizard of oz", "ned stark"]

// 속성의 개수에 따라 객체 항목들을 정렬한다.
var mythical = [
    {
        prop1: "",
        prop2: ""
    },
    {
        prop1: "",
        prop2: "",
        prop3: ""
    },
    {
        prop1: "",
        prop2: ""
    }
]

function sortComparator(a, b) {
    return Object.keys(a).length - Object.keys(b).length;
}

mythical.sort(sortComparator);
/*
[
    {
        prop1: "",
        prop2: ""
    },
    {
        prop1: "",
        prop2: ""
    },
    {
        prop1: "",
        prop2: "",
        prop3: ""
    }
]
*/