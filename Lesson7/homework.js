// var, function
// getTriangle = function, getNumber = function

// #
// ##
// ###
// ####
// #####
// getTriangle(7);

function getTriangle(count) {
    for(let str = '#'; str.length <= count; str += '#') {
        console.log(str);
    }
// 1 ... count
// str увеличивает на #
// выводит str
}

// запросить число у пользователя
// Если число меньше 100, то вывести его в консоль и запросить новое
// Если число больше 100, то прекратить спрашивать числа
function getNumber() {
    // let number;

    do {
        var number = +prompt('Enter the number');

        console.log(number);
    } while(number<100);
}

getNumber();
