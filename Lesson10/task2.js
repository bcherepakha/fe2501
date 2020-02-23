const head = {
        glasses: 1
    },
    table = {
        pen: 3,
        __proto__: head
    },
    bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    },
    pockets = {
        money: 2000,
        __proto__: bed
    };

// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
// pockets → bed → table → head.

console.log(pockets.pen === 3); // (найденное в table)
console.log(bed.glasses === 1); // (найденное в head).
