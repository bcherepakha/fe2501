const hamster = {
        stomach: [],

        eat(food) {
            this.stomach.push(food);
        }
    },
    speedy = {
        __proto__: hamster
    },
    lazy = {
        __proto__: hamster
    };

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log('speedy', speedy.stomach); // apple
console.log('lazy', lazy.stomach); // ?
