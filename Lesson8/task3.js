// 6, 7, 8, 9, ... , 15

function rangeSum(start, end) {
    // let range = [start];

    // for (let i = start + 1; i <= end; i++) {
    //     range.push(i);
    // }

    // return range.reduce(
    //     function(sum, el) { return el + sum; },
    //     0
    // );

    // second step

    // let sum = start;

    // for (let i = start + 1; i <= end; i++) {
    //     sum = sum + i;
    // }

    // return sum;

    // last step

    return (start + end) * (end - start + 1) / 2;
}

function factorial(n) {
    // let f = 1;

    // for (let i = 2; i<=n; i++) {
    //     f = f*i;
    // }

    // return f;

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// f(n) = 1*2*...*n;

// console.log( rangeSum(1, 9) );

// for (let n=0; n<10; n++) {
//     console.log(n, factorial(n));
// }

// Домашнее задание
// f(0) = 8
// f(1) = 12
// f(n) = 2*f(n-1) + 3*f(n-2)
function getValue(n) {
    if (n === 0) {
        return 8;
    }

    if (n === 1) {
        return 12;
    }

    return 2*getValue(n-1) + 3*getValue(n-2);
}

console.log( getValue(5) );
