function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw 'hash table is full';

    let hashedIndex = this.hash(key), squareIndex = 1;

    // 이차 탐사
    while (this.keys[hashedIndex % this.size] != null) {
        hashedIndex += Math.pow(squareIndex, 2);

        squareIndex++;
    }

    this.keys[hashedIndex % this.size] = key;
    this.values[hashedIndex % this.size] = value;
    this.limit++;
}

HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key), squareIndex = 1;

    while (this.keys[hashedIndex % this.size] != key) {
        hashedIndex += Math.pow(squareIndex, 2);

        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }

    return this.values[hashedIndex % this.size];
}

HashTable.prototype.hash = function (key) {
    // 키가 정수인지 확인한다.
    if (!Number.isInteger(key)) throw 'must be int';
    return key % this.size;
}

HashTable.prototype.initArray = function (size) {
    let array = [];

    for (let i = 0; i < size; i++) {
        array.push(null);
    }

    return array;
}

let exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");

// 결과
// 키: [ null, null, null, 85, 72, null, 98, 7, 20, null, 59, 46, 33 ]
// 값: [ null, null, null, 'happy', 'forty', null, 'sad', 'hi', 'hello', null, 'wow', 'weather', 'sunny' ]