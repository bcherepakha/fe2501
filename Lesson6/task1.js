// getNumbers(10, 5);

// getNumbers(10, 3);

// getNumbers(20, 15);

function getNumbers(count, currentNumber) {
    while (currentNumber<=count) {
        console.log(currentNumber);
        currentNumber = currentNumber + 1;
    }
}

// console.log( 0 + 1 + 2 + 3 + 4+ 5 + 6+ 7 + 8 + 9 );

// console.log( getRangeSum(0, 9, 1) );

function getRangeSum(start = 0, end = 9, step = 1) {
    let sum = 0;

    // do {
    //     currentNumber+=step; // currentNumber = currentNumber + step;

    //     sum = sum + currentNumber;
    // } while (currentNumber < end);

    for (let currentNumber = start; currentNumber <= end; currentNumber+=step) {
        sum = sum + currentNumber;
    }

    return sum;
}

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// getBoard();

function getBoard() {
// row = 0 ... 7
// str = ''
// column = 0 ... 7 => (row + column) % 2 === 0 ? str += # : str += ' '
// => str
    for (let row = 0; row < 8; row++) {
        // console.log('row = ', row);
        let str = '';

        for (let column = 0; column < 8; column++) {
            if ((column + row) % 2 === 0) {
                str += '#';
            } else {
                str += ' ';
            }

            // console.log('row = ', row, 'column = ', column, str);
        }

        console.log(str);

    }
}
