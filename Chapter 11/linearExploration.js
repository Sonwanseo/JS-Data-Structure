function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw 'hash table is full';

    let hashedIndex = this.hash(key);

    // 선형 탐사
    while (this.keys[hashedIndex] != null) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function (key) {
    let hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;
    }

    return this.values[hashedIndex];
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
// 키: [ 85, 98, null, null, null, null, 7, 20, 33, 46, 59, 72 ]
// 값: [ 'happy', 'sad', null, null, null, null, 'hi', 'hello', 'sunny', 'weather', 'wow', 'forty' ]