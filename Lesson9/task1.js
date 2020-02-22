// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(obj) {
    for(const key in obj) {
        return true;
    }

    return false;

    // const keys = Object.keys(obj),
    //     values = Object.values(obj),
    //     entries = Object.entries(obj);

    // return keys.length === 0;
}

// Test
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["08:30"] = "wake up";
schedule["09:30"] = "hello world!";

console.log( isEmpty(schedule) ); // false
