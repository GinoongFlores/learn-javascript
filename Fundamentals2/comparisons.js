/* 
    * Comparisons 

    * reference: https://javascript.info/comparison
*/

// * strings are compared letter-by-letter

console.log("Z" > "A");
let zDefine = "Z".codePointAt();
let aDefine = "A".codePointAt();
console.log(`Letter "Z" is greater than letter "A" due to its Unicode. 
Because letter "Z" has a unicode of ${zDefine} while letter "A" has ${aDefine} of Unicode`);


console.log("\nComparison of different types");
/* 
 * Comparison of different types 
 * When comparing different types, Javascript converts the value to numbers

*/

console.log("2" > 1); // * true, string "2", becomes a number 2
console.log('01' == 1); // * true, string '01', becomes a number 1 

// * For boolean values, 'true' becomes 1 and 'false' becomes 0

console.log(true == 1); // true
console.log(false == 0); //true 

console.log("\nRegular equality & Strick equality");

// * A regular check == has a problem. It cannot differentiate 0 from false:

console.log(0 == false); // true 

// * The same thing happens with an empty string: 
console.log('' == false); // true
/* 
    * This happens because operands of different types are converted to numbers by the equality operator == 
    * An empty string, just like false, becomes a 0. 

    * A strick equality operator === checks the equality without type conversion
    * In other words, if a and b are of different types, then a === b immediately return false without an attempt to convert them.

*/
console.log(0 === false); // false

console.log("\nComparison with null and undefined");
/* 
    * Comparison with null and undefined 
    * null is an assignment value. It can be assigned to a variable as a representation of no value
    * undefined is a variable that has been declared but has not yet assigned or have a value

    * For a strick equality check === 
    * These values are different, because each of them is a different type
*/
console.log(null === undefined); // false

/* 
    * For a non-strick check ==
    * They equal each other (in the sense of ==). Javascript consider these relatively equal since both of them represent an empty value
*/
console.log(null == undefined); // true

console.log("\nFor Maths and other Comparisons");
/*
    * For maths and other comparisons < > <= >= 
    * null/undefined are converted to numbers: null becomes 0, while undefine becomes NaN
    * null only equals undefined
    
    * Equality check ==  and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as a 0.
        * That's why (3) null >= 0 is true and (1) null > 0 is false. 
*/

console.log("\nStrange result: null vs 0");
console.log(null > 0); // (1) false 
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

console.log("\nAn incomparable undefined");
// * An incomparable undefined - The value undefined shouldn't be compared to other values: 
console.log(undefined > 0); // (1) false 
console.log(undefined < 0); // (2) false
console.log(undefined == 0); // (3) false
/* 
    * We get the results because: 

    * Comparisons (1) and (2) return false because undefine gets converted to NaN and Nan is a special numeric value which returns false for all comparisons.
    * The equality check (3) returns false because undefine only equals null, undefined, and no other value. 
*/

// ? Tasks - https://javascript.info/comparison#tasks
console.log("\nTasks");
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true 
console.log(undefined == null); // true 
console.log(undefined === null); // false
console.log(null == "\n\0\n"); // false
console.log(null === +"\n0\n"); // false