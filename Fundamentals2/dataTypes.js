// Reference: https://javascript.info/types

// Programming languages that allow such things, such as Javascript, are called "dynamically typed", meaning that there exists data types, but variables are not bound to any of them.

let n = 123;
n = 12.345789;

console.log(n);

// Infinity represents the mathematical infinity. It is a special value greater than any number or finite number
// We can get it by dividing a number by 0
console.log("Infinity");
console.log(1 / 0);
// Outputs Infinity
console.log(Infinity);
console.log(isFinite(1 / 0));

// BigInt is used to store a large amount of number like in cryptography, or microsecond-precision timestamps.
console.log(`BigInt`);
const bigInt = 1234567890123456789012345678901234567890n;
console.log(9007199254740991 + 1);

// Strings in Javascript must be surrounded by quotes and there three types of quotes in JS (Double quotes "Hello", Single quotes 'Hello', and Backticks `Hello`)

let str = "Double quotes are okay to use";
let srt1 = "Single quotes are okay to use too";
let phrase = `Can embed a variable ${str + srt1} or an expression ${1 + 1}`;

// Using a function
function sum(a, b) {
	return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}`); // 1 + 2 = 3

// Backticks are "extended functionality" quotes. It allows us to embed variables and expressions into a string by wrapping them in ${..}
let Name = "Christian";
console.log(`Hello, ${Name}!`);

// The expression inside ${..} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetic expression like 1 + 2  or something more complex.
// This is can only be done using backticks.
console.log(`The result for 1 + 2 is: ${1 + 2}`);

// There's no character (char) data type in Javascript

console.log("Boolean");
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
console.log(isGreater);

// In Javascript, null is not "reference to a non-existing object" or a "null pointer" like some other language.

// It's just a special value which represents "nothing", "empty", or "value unknown".
// The code above states that age is unknown.
let age = null;
console.log(age);

// The "undefined" value
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of "undefined" is "value not assigned"
// If a variable is declared, but not assigned, then its value is undefined.
let Age;
console.log(Age);

/* But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.
 */

// The typeof operator
// It use to determine the type of the argument or variable
console.log("\ntypeof operator");
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof "foo"); // string
console.log(Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object (null expresses a lack of identification, indicating that a variable points to no object)
console.log(typeof alert); // function(inside the browser) and undefined(outside the browser or using NodeJS)

// Strings
const badString = String;
console.log(badString);

// How to add an apostrophe in a word using a single quote.
// const apostrophe = 'I\'ve got my apostrophe';
// While double would work for a sentence with an apostrophe
const apostrophe = "I've got my apostrophe";
console.log(apostrophe);

// Concatenated Strings using backticks
// Join together two variables
const greet = "Hello, I'm ";
const name = "Christian";
const join = `${greet}${name}`;
console.log(join);

// Converting datatypes (String -> Number) (Number -> String)
const myString = "123";
// Turn into a Number
const myNum = Number(myString);
console.log(typeof myNum);

// Go back to String
turnString = myNum.toString();
console.log(typeof turnString);

// Including expressions in strings - You can include Javascript expressions in template literals, as well as simple variables, and the results will be included in the result
console.log("\nIncluding expressions in strings");
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
// Example of an template literal with an string {interpolation} method
// Automatic replacing of variables with real values is called string interpolation
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100
	}%`;
console.log(output);

// In a template literal, we can use a double quote inside a string or use both single and double quotes
console.log(`Christian Paul "Flores"`);

// Multiline strings
// To get the same result we can also add /n to a string to include a break line on reach sentences
console.log("\nMultiline strings");
const Output = `I like the song. 
I gave it a score of 90%`;
console.log(Output);
