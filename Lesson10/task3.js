const animal = {
        eat() {
            this.full = true;
        }
    },
    rabbit = {
        __proto__: animal
    };

rabbit.eat();

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
