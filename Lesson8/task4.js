// Чистая функция
// Если мы передпем один и тот же набор аргументов, то получаем один и тот же результат
// Функция должна зависеть только от переданных аргументов, либо от данных определенных внутри нее
// Функция не изменяет никакие внешние переменные


// Функция высшего порядка
// Функция возвращающая функцию

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    b = a.filter(function(el, idx, arr) {
        return el > 6 || el < 3;
    });

// console.log(b); // либо большие чем 6, либо меньше чем 3.

// Создать функцию, котторая возвращает true, если элемент находится между 5, 12
function createInBetween(min, max) {
    return function(x) {
        return x >= min && x <= max;
    }
}

// createInBetweenLE = { min: 5, max: 12, f: function }
// f.[[Scope]] = createInBetweenLE

const inBetween = createInBetween(5, 12), // inBetween = createInBetweenLE.f
    c = a.filter(inBetween);

// console.log(c);

function createInArray(arr) {
    return function(x) {
        // for (let i=0; i<arr.length; i++) {
        //     if (x === arr[i]) {
        //         return true;
        //     }
        // }

        // return false;
        return arr.includes(x);
    }
}

const inArray = createInArray([1, 3, 6, 12, 15, 20]),
    d = a.filter(inArray); // [1, 3, 6, 12]

console.log(d);
