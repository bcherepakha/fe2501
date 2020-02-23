const obj = {}; // new Object

console.log( obj.__proto__ === Object.prototype); // true
console.log( obj.toString === obj.__proto__.toString); // true
console.log( obj.toString === Object.prototype.toString ); // true
console.log( Object.__proto__ === Function.prototype );

// Другие встроенные объекты, такие как Array, Date, Function и другие, также хранят свои методы в прототипах.

const arr = [1, 2, 3];

// наследует ли от Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// затем наследует ли от Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// и null на вершине иерархии
console.log( arr.__proto__.__proto__.__proto__ ); // null

// Самое сложное происходит со строками, числами и булевыми значениями.
// Как мы помним, они не объекты. Но если мы попытаемся получить доступ к их свойствам, то что тогда?
// будет создан временный объект-обёртка с использованием встроенных конструкторов String, Number и Boolean,
// который предоставит методы и после этого исчезнет.

// Эти объекты создаются невидимо для нас, и большая часть движков оптимизирует этот процесс,
// но спецификация описывает это именно таким образом. Методы этих объектов также находятся в прототипах,
// доступных как String.prototype, Number.prototype и Boolean.prototype.

// Значения null и undefined не имеют объектов-обёрток
