let x = getNumber('X');
let y = getNumber('Y', 5);
let action = prompt('What action do you wont?');

// if (action === '+') {
//     console.log( sum(x, y) );
// } else if (action === '-') {
//     console.log(x - y);
// } else if (action === '/') {
//     console.log(x / y);
// } else if (action === '*') {
//     console.log( x * y);
// } else {
//     console.error('Unknown action!');
// }

// switch (action) {
//     case '+':
//         console.log( sum(x, y) );
//         break;
//     case '-':
//         console.log(x - y);
//         break;
//     case '/': // action === '/'
//         console.log(x / y);
//     case '*':
//         console.log(x * y);
//         break;
//     default:
//         console.error('Unknown action!');
// }

const result = action === '+'
                    ? sum(x,y)
                    : action === '-'
                        ? x - y
                        : action === '/'
                            ? x / y
                            : 'Unknown';

console.log( result );

function getNumber(name, def = 3) {
    let x = +prompt('Give me a number, ' + name, def);

    return x;
}

function sum(x, y) {
    return x + y;
}
