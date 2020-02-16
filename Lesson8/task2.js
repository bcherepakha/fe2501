function pow(x, n) {
    // return x ** n;

    // let i = 0,
    //     result = 1;

    // while(i < n) {
    //     result = result * x;
    //     i++; // i = i + 1
    // }

    // return result;

    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x;
    }

    return x * pow(x, n-1);
}

function getFibbonachi(n) {
    // if (fibonachCash[n]) {
    //     return fibonachCash[n];
    // }

    // const result = getFibbonachi(n-1) + getFibbonachi(n - 2);

    // fibonachCash[n] = result;

    // return result;

    let a = 2;

    if (n === 0) {
        return a;
    }

    let b = 5;

    if (n === 1) {
        return b;
    }

    for (let i=2; i<=n; i++) {
        let c = a + b;

        a = b;
        b = c;
    }

    return b;
}

getFibbonachi.cash = {
    0: 2,
    1: 5
};

// for(let n=0; n<12; n++) {
//     console.log( n, getFibbonachi(n) );
// }
