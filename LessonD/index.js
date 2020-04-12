const animal = {
    eat: true,
    run: true
};

const rabbit = {
    name: 'rabbit'
};

rabbit.__proto__ = animal;

console.log( 'eat', rabbit.eat  );
console.log( 'sleep 1', rabbit.sleep );

animal.sleep = true;

console.log( 'sleep 2', rabbit.sleep );
