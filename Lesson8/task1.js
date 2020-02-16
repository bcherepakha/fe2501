function getRandomInt(min, max) {
    return Math.round(min + (max - min)*Math.random());
}

function createArray(count, min, max) {
    let result = [];

    for(let i=0; i<count; i++) {
        result.push( getRandomInt(min, max) );
    }

    return result;
}

const arr = createArray(10, 0, 1000);

console.log(arr, getMaximum(arr));

function getMaximum(arr) {
    return Math.max(...arr);
}

function getMaximumInArguments() {
    let max = arguments[0];

    for(let i=1; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }

    return max;
}

console.log( getMaximumInArguments(...arr) );
