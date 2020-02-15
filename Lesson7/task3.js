const examResult = [
    {name: 'Anna', result: 67},
    {name: 'Diana', result: 80},
    {name: 'Olha', result: 25},
    {name: 'Dmitry', result: 75},
    {name: 'Maxim', result: 0},
    {name: 'Andrey', result: 100},
    {name: 'Bars', result: 35}
];

function cloneArray(arr) {
    return arr.map(function(el) { return el; });
}

function getBestUser(examResult) {
    const results = cloneArray(examResult);
    // const results = [...examResult];

    results.sort(function(res1, res2) {
        return res2.result - res1.result;
    });

    return results[0].name;
}

function getLooserName(examResult) {
    let name = examResult[0].name,
        min = examResult[0].result;

    for (let i=1; i<examResult.length; i++) {
        const currentUserResult = examResult[i].result;

        if (currentUserResult < min) {
            min = currentUserResult;
            name = examResult[i].name;
        }
    }

    return name;
}

function getAverageResult(examResult) {
    return examResult.reduce(
        function(sum, user) {
            return  sum + user.result;
        },
        0
    ) / examResult.length;
}

function getUsersWithResumtMoreThan(examResult, min) {
    // const result = [];

    // for(let i=0; i<examResult.length; i++) {
    //     if (examResult[i].result > min) {
    //         result.push( examResult[i] );
    //     }
    // }

    // return result;

    return examResult
        .filter(
            function(user, idx, arr) {
                return user.result > min;
            }
        )
        .map(
            function(user) {
                return user.name;
            }
        );
}

// console.log(1, examResult);

// console.log(2, getBestUser(examResult) );

// console.log(3, examResult);

// console.log( getLooserName(examResult) );

console.log( getAverageResult(examResult) );

console.log( getUsersWithResumtMoreThan(examResult, getAverageResult(examResult)) );
