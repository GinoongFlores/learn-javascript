function myFunction() {
    console.log('Hello World');
}

myFunction();

// immediately invoke function 
(function anotherFunction() {
    console.log('Hello Philippines!');
})();


// parameters & arguments 
function myFunction0(param1, param2) {
    console.log(param1, param2);
}

myFunction0(21, "My new age!");

// * Scopes - Block scope, Function scope, and Global scope (something declared inside a {} block cannot be accessed outside of that block)

// * creating a variable function is also called anonymous function
const anotherFunction = function () {
    console.log('another hello world');
}

anotherFunction();

/* 

* this is also an anonymous function but it will not work because you need to declare a name or assigned to a variable
 function () {
    console.log("this will not work"); 
 }

*/

// An arrow function with parameters
const arrowFunction = (param1, param2) => {
    console.log(param1, param2);
    console.log('I am an arrow function');
}

arrowFunction(2 + '1', 'Is my new age');

// functions with returns
let returnFunction = () => {
    const a = 20;
    return a;
}

let returnFunction2 = () => {
    const a = 20;
    return a < 30; // true 
}


const result = returnFunction2(); // assigning a function to a variable
console.log(result);

// Improper return
const improperReturn = () => {
    let num = 20;
    num = 100;
    return num;
    num = 50; // num will never change as it define before assigning or returning the num variable
}
console.log(improperReturn());

// * if there's a parameter that has a function scope it cannot be accessed at the global level. But if we have the global variable we can accessed it within a function scope. 
const myAge = 20; // higher scope (Global scope)

let myFunctionReturn = () => {
    if (myAge < 21) {
        return 'returned the function early';
    }

    return 21;
}

console.log(myFunctionReturn());

// functions & Objects 
// * You can call a function inside an object by declaring the function as a property on the object and invoking it.

function myFunctionObject() {
    return 21;
}

const aliasVariable = myFunctionObject;

const myObj = {
    prop1: 50,
    prop2: myFunctionObject // calling a function inside an object
}

console.log(myObj.prop2());

// Sample of string methods
const myString = 'zach';
console.log(myString.replace('h', 'k'));
console.log(myString);
