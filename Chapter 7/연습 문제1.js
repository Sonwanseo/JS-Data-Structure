function someLargeArray() {
    return new Array(1000000);
}

var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}

function printProperty(obj) {
    console.log(obj['prop1']);
}

printProperty(exampleObject);

// 출력하고자 하는 속성만 함수의 매개변수로 전달해야 함.

function someLargeArray() {
    return new Array(1000000);
}

var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}

function printProperty(prop) {
    console.log(prop);
}

printProperty(exampleObject['prop1']);