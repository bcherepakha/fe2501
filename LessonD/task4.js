const animal = {
    name: 'bird',
    run: true,
    sleep: false
};


const {sleep, ...additionalKeys} = animal;

console.log( 'sleep', sleep );
console.log( additionalKeys );

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, , b, , ...c] = numbers;
const [...dublicateNumbers] = numbers;

console.log('a', a);
console.log('b', b);
console.log('c', c);

console.log( 'dublicateNumbers', dublicateNumbers, dublicateNumbers === numbers );

function sum(...arr) {
    console.log(arguments);
    console.log(arr);

    return arr.reduce(
        (sum, el) => sum + el,
        0
    );
}

console.log( sum(1, 2, 3) ); // 6
console.log( sum(...numbers) );
