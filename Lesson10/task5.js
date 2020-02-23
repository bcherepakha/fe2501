const animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jumps = true

console.log(rabbit.jumps); // ?

Rabbit.prototype = {};
// Rabbit.prototype.eats = false;
// delete rabbit.eats;
// delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?
