const animal = {
    eats: true
};

function Rabbit(name) {
    // this = {}

    this.name = name;

    // return this;
}
// f.prototype = { constructor: f }
Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit);
console.log(rabbit.eats); // true

Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jumps = true

console.log(rabbit.jumps); // ?

// Rabbit.prototype = {};
// Rabbit.prototype.eats = false;
// delete rabbit.eats;
delete Rabbit.prototype.eats;

const rabbit1 = new Rabbit('Vasya');

console.log( rabbit.eats ); // ?
console.log( rabbit1.jumps ); // ?
