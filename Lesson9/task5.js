'use strict';

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user = makeUser();

console.log(user);
console.log(user.ref.name); // undefined?
