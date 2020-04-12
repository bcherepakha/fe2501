class Animal {
    constructor(name) {
        // this = {}

        this.name = name;
        this.canSleep = true;
        this.sleeped = false;

        // this.__proto__ = Animal.prototype
        // return this;
    }

    sleep() {
        if (this.canSleep) {
            this.sleeped = true;
        }
    }

    wakeup() {
        if (this.canSleep && this.sleeped) {
            this.sleeped = false;
            console.log('wake up');
        }
    }
}

const animal = new Animal('bird'); // this = undefined
const wolf = new Animal('wolf'); // this -> constructor

console.log( animal );
console.log( Animal.prototype );

Animal.prototype.run = true;

console.log( animal.run );

console.log( wolf );

animal.sleep(); // this = animal

console.log( wolf );
console.log( animal );

wolf.sleep(); // this = wolf

// const sleep = wolf.sleep;

// sleep(); // this = undefined

class Rabbit extends Animal {
    constructor() {
        super('rabbit');
    }

    wakeup() {
        super.wakeup();

        console.log('I say: I am Rabbit');
    }

}

const rabbit = new Rabbit();

console.log( rabbit );

rabbit.sleep();

console.log( rabbit );

rabbit.wakeup();

console.log( rabbit );
