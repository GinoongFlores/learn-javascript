// * callbacks is a function that is passed into another function as an argument which can be called later inside the function

function myCallBack(someNumber) {
    return someNumber * 2;
}

function mainFunction(randomNumber, shouldCall, callBack) {

    let result = randomNumber; // * in this example, result === 20 

    // * In this example, shouldCall is `true`, so we do reach the callback 
    if (shouldCall) {

        // * In this example, `callBack` represents `myCallBack` from above
        result = callBack(randomNumber);

    }

    // * Since `result` was re-assigned by the callBack function, it returns 40
    return result;
}

mainFunction(20, true, myCallBack);
console.log(myCallBack(20));

// Other way of calling a call back function
mainFunction(20, true, function (num) {
    return num * 2;
})

// Using arrow function
mainFunction(20, true, (num) => {
    return num * 2;
})

// easiest way to call because its a single argument
mainFunction(20, true, num => num * 2)




