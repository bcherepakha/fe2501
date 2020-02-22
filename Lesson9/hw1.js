function calculate() {
    const sum1 = sum.apply(null, arguments);

    function sum() {
        let sum = 0;

        for(let i=0; i<arguments.length; i++) {
            sum += arguments[i];
        }

        return sum;
    }

    return function() {
        const sum2 = sum.apply(null, arguments);

        return sum1 + sum2;
    }
}

const sumTo = calculate(1,1);

console.log(    sumTo(1) === 3                  );
console.log(    sumTo(5) === 7                  );

console.log(    calculate(1)(1) === 2           );
console.log(    calculate(1,1)(1) === 3         );
console.log(    calculate(1,1)(1,-1) === 2      );
console.log(    calculate(2,4)(3,7,1) === 17    );
console.log(    calculate(2,4,-1)(3,7,1) === 16 );
