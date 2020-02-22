const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(const key in obj) {
        if (typeof obj[key] === 'number') {
            // obj[key] = obj[key] * 2;
            obj[key] *= 2;
        }
    }
}

// typeof menu.width === 'number'
// typeof menu.title === 'string'

// Test
multiplyNumeric(menu);

console.log(menu.width === 400 && menu.height === 600 && menu.title === 'My menu');
console.log(menu);
