function getRandomInt(min, max) {
    return Math.round(min + (max - min)*Math.random());
}

// console.log( getRandomInt(4, 8) );

function createArray(count, min, max) {
    let result = [];

    for(let i=0; i<count; i++) {
        result.push( getRandomInt(min, max) );
    }

    return result;
}

function arraySum(arr) {
    // let sum = 0;

    // arr.forEach(function(el) {
    //     sum += el;
    // });

    // return sum;

    return arr.reduce(
        function(sum, el) {
            return sum + el;
        },
        0
    );
}

function mult(a, b) {
    return a*b;
}

function arrayMult(alt) {
    return arr.reduce(
        mult,
        1
    );
}

function arrayMultBy(arr, mult) {
    // let result = [];

    // for (let i=0; i<arr.length; i++) {
    //     result.push( arr[i]*mult);
    // }

    // return result;

    function multBy(el) {
        return el*mult;
    }

    return arr.map(multBy);
}

let arr = createArray(13, 2, 12);

console.log(arr, arraySum(arr));

// console.log( arrayMultBy([1, 2, 3, 4], 2) ); // [2, 4, 6, 8]
// console.log( arrayMultBy([1, 2, 3, 4], 3) ); // [3, 6, 9, 12]

function sortingFromMaxToMin(a, b) {
    // f(a, b) < 0; => a < b => a - b < 0;
    // f(a, b) > 0; => a > b => a - b > 0;
    // f(a, b) === 0; => a === b; a - b === 0;

    console.log({a, b});

    return b - a;
}


// console.log( arr.sort(sortingFromMaxToMin) );

console.log(
    ['Diana', 'anna', 'Olha', 'Dmitry', 'Maxim', 'Andrey', 'Bars'].sort(
        function(word1, word2) {
            const w1 = word1.toLowerCase(),
                w2 = word2.toLowerCase();

            if (w1 < w2) {
                return -1;
            }

            if (w2 > w1) {
                return 1;
            }

            return 0;
        }
    )
);
