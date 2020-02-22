'use strict';

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// Можно ли добавить сюда еще одну зарплату?
salaries.Ihor = 140; // ?

// Напишите код для суммирования всех зарплат
function salariesSum(salaries) {
    // let sum = 0;

    // for (const name in salaries) {
    //     sum += salaries[name];
    // }

    // return sum;
    console.log('this', this);
    console.log('arguments', arguments);

    return Object.values(salaries)
        .reduce(
            (sum, value) => sum + value,
            0
        )
}

// Test
// console.log( salariesSum(salaries) === 530 );

// const a = {
//         name: 'a',
//         b: {
//             name: 'b',
//             sum: salariesSum
//         }
//     },
//     sum = a.b.sum;

// a.b.sum(salaries); // this = ?
// sum(salaries); // this = ?

Object.defineProperty(salaries, 'sum', {
    enumerable: true,
    get: function() {
        let sum = 0;

        for (const name in this) {
            if (name !== 'sum') {
                sum += salaries[name];
            }
        }

        return sum;
    }
});

console.log( salaries.sum );

salaries.Ann -= 100;

console.log( salaries.sum );
console.log( salaries );
