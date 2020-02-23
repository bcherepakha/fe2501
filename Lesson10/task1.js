// В программировании мы часто хотим взять что-то и расширить.
// Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object, а оно отсутствует,
// JavaScript автоматически берёт его из прототипа. В программировании такой механизм
// называется «прототипным наследованием». Многие интересные возможности языка и техники
// программирования основываются на нём.


const animal = {
        eats: true,
        walk() {
            console.log("Animal walk");
        }
    },
    rabbit = {
        jumps: true
    };

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true

// Здесь мы можем сказать, что "animal является прототипом rabbit" или "rabbit прототипно наследует от animal".
// Так что если у animal много полезных свойств и методов, то они автоматически становятся доступными у rabbit.
// Такие свойства называются «унаследованными».

rabbit.walk();

// Цепочка прототипов может быть длиннее:

const longEar = {
    earLength: 10,
    __proto__: rabbit
};

longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (из rabbit)

// Прототип используется только для чтения свойств.
// Операции записи/удаления работают напрямую с объектом.

rabbit.walk = function () {
    console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
longEar.walk(); // Rabbit! Bounce-bounce!
animal.walk(); // Animal walk

// Object.keys возвращает только собственные ключи
console.log('keys for rabit:', Object.keys(rabbit)); // jumps, walk

// for..in проходит и по своим, и по унаследованным ключам
console.group('props in rabit');
for(const prop in rabbit) console.log(prop); // jumps, walk, eats
console.groupEnd();

// Возможна фильтрация
console.group('own and inherited props in rabit');
for(const prop in rabbit) {
    const isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps, walk
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }
console.groupEnd();
