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
console.log(typeof null); // object (this is an error in the language as null is actually an object)
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
const output = `I like the song ${song}. I gave it a score of ${
	(score / highestScore) * 100
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

// Javascript String Methods

let txt = "ABCDEFGHIJKLMNIOPQRSTUVWXYZ";
let length = txt.length;
console.log(`The length of the txt is ${length}`);

// Extracting String Parts
/* There are 3 methods for extracting a part of string: 

	slice(start, end) 
	substring(start, end) 
	substr(start, length)
*/

/* slice() extracts a part of a string and returns the extracted part in a new string. 
Javascript counts from zero(0)
 - First position is 0. 
 - Second position is 1.

the last number is the stopping point 
ex. slice(7, 13) - our starting point is 7 and our stopping point is 13 but it will not be included
*/
console.log("\nString slice()");
let fruits = "Apple, Banana, Kiwi";
let slicePart = fruits.slice(7, 13);
console.log(slicePart);

// if the parameter is negative, the position is counted from the end of string.
slicePart = fruits.slice(-12, -6);
console.log(slicePart);

// slicing the rest of the string from the start of te specified number
// or counting from the end by giving a negative value
slicePart = fruits.slice(15);
console.log(slicePart);

// Javascript String substring()
/* 
substring() method and the slice() method are the same in terms of:
 - If there are no ending index, then it returns the substring starting from the given given index until the end of the original string
 - Setting the startIndex and the endIndex will get the characters between the given index numbers
 - If the startIndex and the endIndex are greater than the length of string, then it will return an empty string
 
Differences of the slice() method that will not work on the substring() method: 
 - If startIndex is a negative number, then the counting starts from the end of the string (reverse)
 - If startIndex > (greater than) endIndex 

*/
console.log("\nString substring()");
let part = fruits.substring(7, 13);
console.log(part);
// The startIndex here is greater than the endIndex. In substring, it will just return the values.
part = fruits.substring(20, 0);
console.log(part);

// Javascript String substr(start, length)
// It returns the a portion of string, starting at the given specified index until it reaches the end length of the character
// The substr() method is now a legacy function () that should be avoided when possible
// console.log("\nString substr()");
console.log("");

console.log("substring() method = " + fruits.substring(7, 13));
console.log("slice() method = " + fruits.slice(7, 13));
console.log("substr() method = " + fruits.substr(7));

// Note: Getting a character of strings will not change the original set of strings

// Replace String Content
// The replace() method replaces a specified value with another value in a string that has the same word on it

/* By the default the replace method() is a case sensitive
 - To replace by case insensitive, use a regular expression with an /i flag 
 */

let text = "Please visit STI College Cdo!";
// Match texts with case sensitive
// let newText = text.replace("Cdo", "Orca");

// Match texts with case insensitive
let newText = text.replace(/CDO/i, "Orca");
console.log(newText);

// Converting to Upper and Lower Case
console.log("\n Upper and Lower Case");
let upperText = "Hello World";
let upper = upperText.toUpperCase();
console.log(upper);

let lowerText = "Hello World";
let lower = lowerText.toLowerCase();
console.log(lower);

// Javascript String concat()
// concat() joins two or more strings. Using the concat() method or binary plus operator (+)
console.log("\n Concatenation");
let text0 = "Hello";
let text1 = "World";
let concat = text0.concat(" ", text1);
console.log(concat);

// Note: ALl strings return a new string. They don't modify the original string. Strings are immutable, it means Strings are cannot be changed, only replaced.

// Javascript String trim()
// The trim() method removes whitespace from both sides of a string
console.log("\n Trim");
let trimText = "	Hello World! 	";
let trim = trimText.trim();
console.log(trim);

// Javascript String padStart() & padEnd() method
// padStart(number, value)

console.log("\n Padding Start & Padding End method");
let padSText = "5";
// adding four times of the character of "x" from the start or left
// let padStart = padSText.padStart(4, "x");

// Can be use to add padding
let padStart = padSText.padStart(5, " ");
console.log(padStart);

// The padEnd() method adds a character to the end or right of the given value
let padEnd = padSText.padEnd(5, "x");
console.log(padEnd);

// Note: The padStart() & padEnd() method is a string method, you cannot add a padding to a number. To add a padding in a number, convert the number first to a string.

// Ex:
let numb = 5;
let numbToString = numb.toString();
// or
// numb = numb.toString();
let padded = numbToString.padEnd(4, "0");
console.log(padded);

// Extracting String Characters
/* There are 3 methods for extracting string characters 
 - charAt(position)
 - charCode(position)
 - Property access []
*/

// Javascript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
// The charCodeAt () method returns the unicode of the character at a specified index in a string

console.log("\n charAt() & charCodeAt() method");
let charText = "Hello World";
let char = charText.charAt(0);
console.log(char);

char = charText.charCodeAt(0);
console.log(char);

/* 
Note: Property access might be a little unpredictable 
- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!)
*/
char = charText[12];
console.log(char);

// Javascript String split()
console.log("\nString split() method");
/* A string can be converted to an array with the split() method 
- text.split(",") // Split on commas
- text-split(" ") // Split on spaces
- text-split("|") // Split on pipe

*/

let splitText;
splitText = "a, b, c, d, e, f"; // split on commas
splitText = "a b c d e f"; // split on spaces
splitText = "a | b | c | d | e | f"; // split on pipe

const myArray = splitText.split("|");
splitText = "";
// console.log(myArray[3]);
// let padSplit = splitText.padStart(1, " ");

for (let i = 0; i < myArray.length; i++) {
	splitText += myArray[i] + "\n".padEnd(4, " ");
}
console.log(splitText);

// Other example
let textH = "Hello";
const myArr = textH.split("");

textH = "";
for (let i = 0; i < myArr.length; i++) {
	textH += myArr[i] + "\n";
}
console.log(textH);
