function Animal() {
    // this = {}

    // this.__proto__ = Animal.prototype

    // return this;
}

Animal.prototype.eat = true;
Animal.prototype.run = true;

const animal = new Animal();

console.log( animal );
console.log( Animal.prototype );
console.log( animal.__proto__ === Animal.prototype );

function Rabbit() {
    // this = {}

    // return this;
}

Rabbit.prototype.name = 'rabbit';
Rabbit.prototype.__proto__ = Animal.prototype;

const rabbit = new Rabbit();

console.log( rabbit );
console.log( rabbit.__proto__ === Rabbit.prototype );

rabbit.run = false;

console.log( rabbit.eat );
console.log( rabbit.run );
console.log( 'rabbit.sleep',  rabbit.sleep);
console.log( 'animal.sleep',  animal.sleep);

Animal.prototype.sleep = true;

console.log( 'rabbit.sleep',  rabbit.sleep);
console.log( 'animal.sleep',  animal.sleep);
