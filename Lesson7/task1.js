function createArray() {
    let data,
        result = [];

    do {
        data = prompt('Get data');

        if (data !== null) {
            // result[result.length] = data;
            // result.push(data);
            result.unshift(data);
        }
    } while(data !== null);

    return result;
}

let a = createArray();

// delete a[2];

// for (let i=2; i<a.length; i++) {
//     a[i-1] = a[i];
// }

// a.pop();

a.forEach(function(el, idx, arr) {
    console.log({
        el: el,
        idx: idx,
        arr: arr
    });
});

// console.log( a );
