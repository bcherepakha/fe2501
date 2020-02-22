function sum(...args) {
    let currentSum = 0;

    function magicSum(...args) {
        currentSum = currentSum + args.reduce(
            (sum, value) => sum + value,
            0
        );

        return magicSum;
    }

    magicSum.showSum = function() {
        return currentSum;
    }

    magicSum.valueOf = magicSum.showSum;

    magicSum(...args);

    return magicSum;
}

console.log( +sum(1, 2, 3, 4), 10 );
console.log( +sum(1, 2, 3, 4)(5, 2), 17 );
console.log( +sum(1, 2, 3, 4)(5, 2)(3), 20 );
