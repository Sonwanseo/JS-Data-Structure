function Animal(name, animalType) {
    this.name = name;
    this.animalType = animalType;
}
Animal.prototype.sayName = function () {
    console.log(this.name);
}
Animal.prototype.sayAnimalType = function () {
    console.log(this.animalType);
}

function Dog(name) {
    Animal.call(this, name, "Dog");
}

// 메소드들에 대해 복사한다.
Dog.prototype = Object.create(Animal.prototype);

var myAnimal = new Animal('ditto', 'pokemon');
myAnimal.sayName(); // 'ditto'
myAnimal.sayAnimalType(); // 'pokemon'

var myDog = new Dog('candy', 'dog');
myDog.sayName(); // 'candy'
myDog.sayAnimalType(); // 'dog