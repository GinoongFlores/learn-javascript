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
 - If startIndex > (greater than) endIndex (It allows startIndex to be greater than end)

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

/* 
	Substring 
   - If the startIndex and the endIndex are greater than the length of string, then it will return an empty string. But not for substring()
   - Negative arguments will not work, they are treated as 0. 
*/

// This will not work due to both arguments are negative
console.log("substring() method = " + fruits.substring(-13, -7));

// This will work but starts from the beginning
// console.log("substring() method = " + fruits.substring(-13, 13));

console.log("substring() method = " + fruits.substring(7, 13));
console.log("slice() method = " + fruits.slice(7, 13));
console.log("substr() method = " + fruits.substr(7));

/* Note: 
	- Getting a character of strings will not change the original set of strings 
	- slice() method is a little bit more flexible, it allows negative arguments and shorter to write
*/

/* Comparing strings 
  - A lowercase letter is always greater than the uppercase
  - Characters are compared by its numeric code
*/
console.log("\nComparing strings")
console.log("a" > "Z"); // true

// Letters with diacritical marks are "out of order"
console.log('??sterreich' > 'Zealand'); // true

// To understand what happens, lets use the codeAtPoint() method to know the corresponding value of a string 
console.log("a".codePointAt(0)); // 97
console.log("Z".codePointAt(0)); // 90

// Creates a character by its numeric code
console.log(String.fromCodePoint(90)); // Z

// * Adding a Unicode characters by their codes using \u followed by the hex code
console.log("\u{00A9}");

// * The character with codes 65.220 (the latin alphabet and a little bit extra) by making a string of them:
let str = '';
for (let i = 65; i <= 220; i++) {
	str += String.fromCodePoint(i);
}

console.log(str);


/*  Searching for a substring

The first method is strString.indexOf(substr, pos). 
There are multiple ways to look for a substring within a string
*/

// strString.indexof(substr, pos)
/* It looks for the substr in str, starting from the given position "pos", and returns the position 
where the match was found or -1 if nothing can be found
 - must used the exact word because it's case-sensitive
*/

console.log("\nIndexOf");
let strString = "Gwapo si Christian, Gwapo Kaau";
let selectIndexOf = strString.indexOf("Gwapo"); // 0, since the word "Gwapo" is found in the beginning
selectIndexOf = strString.indexOf("Christian"); // 12, by counting each character that starts from 0

/*  9, it means the second parameter gives us the idea of the substring position 
or the second parameter allows us to start searching from a given position
*/
selectIndexOf = strString.indexOf("Christian", 1);
console.log(selectIndexOf);

/* Getting all occurrences (finding the each positions of all of its word match), 
we can run indexOf in a loop. Every new call is made with the position */

strString = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = 0;
while (true) {
	let foundPos = strString.indexOf(target, pos);
	if (foundPos == -1) break;

	console.log(`Found at ${foundPos}`);
	pos = foundPos + 1;
}

// Similar method  that search from the end of the string to its beginning
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
const paragraph = "Learning Javascript as of August 26, 2022";
const searchTerm = "Javascript";
console.log(
	`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
		searchTerm
	)}`
);

// The bitwise NOT trick (legacy code)
/* It converts the number to a 32-bit integer (remove the decimal part if exists) and then reverse all bits in its binary representation. */
console.log("bitwise");
console.log(~2); // the same as -(2 + 1)
console.log(~1); // the same as -(1 + 1)
console.log(~0); // the same as -(0 + 1)
console.log(~-1); // the same as -(1 + 1)

// includes, startsWith, endsWith
console.log("\nincludes, startsWith, endsWith");
console.log("Gwapo daw ko".includes("Gwapo"));

// optional argument of str.includes is the position to start
console.log("Gwapo daw ko".includes("Gwapo", 3)); // false, there is no "Gwapo" word on position 3

// The methods, str.startsWith and str.endsWIth do exactly what they say
console.log("\nstartsWith() & endsWith() methods");
console.log("Gwapo".startsWith("Gwa"));
console.log("Gwapo".endsWith("po"));

// Replace String Content
// The replace() method replaces a specified value with another value in a string that has the same word on it

/* By the default the replace method() is a case sensitive
 - To replace by case insensitive, use a regular expression with an /i flag 
 */

console.log("\nReplace");
let text = "Please visit STI College Cdo!";
// Match texts with case sensitive
// let newText = text.replace("Cdo", "Orca");

// Match texts with case insensitive
let newText = text.replace(/CDO/i, "Orca");
console.log(newText);

// Converting to Upper and Lower Case
console.log("\n Upper and Lower Case");
let upperText = "Hello World";
let upper = upperText.toUpperCase().split(" "); // split turns the string into an array
console.log(upper);

const ndxf = upper.indexOf("WORLD");
console.log(ndxf);

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
console.log(myArray[3]);
// let padSplit = splitText.padStart(1, " ");

// for (let i = 0; i < myArray.length; i++) {
// 	splitText += myArray[i] + "\n".padEnd(4, " ");
// }
// console.log(splitText);

// Other example
let textH = "Hello";
const myArr = textH.split("");

textH = ""; // Make textH an empty string before the for loop
for (let i = 0; i < myArr.length; i++) {
	// Use the textH variable an empty string that returns the split of the word "Hello" with a break line
	textH += myArr[i] + " \n";
}
console.log(textH);

