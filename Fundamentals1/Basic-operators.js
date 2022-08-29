// Exponential
console.log(4 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(2 ** (3 ** 2));

// But, if the binary + is applied to strings, it merges (concatenates) them:
let s = "my " + "string";
console.log(s);

// Note that if any of the operands is a string, then the other one is converted to a string too.
console.log("1" + 2);
console.log(2 + "1");

// the operator first add the two integers "2 + 2" = 4 then add a string of 1
console.log(2 + 2 + "1");

// if the first operand is a string then it will treat the other operands as strings too.
console.log("1" + 2 + 2);

// The binary + is the only operator that support's string concatenation. Other arithmetic operators work and converts their operands to numbers
console.log(6 - "2");
console.log("6" / "2");

console.log("Numeric conversion, unary +");
let x = 1;
let y = 5;
console.log(-y); // recognizes a negative number due to to the unary operator
console.log(+x);
console.log(+true);
console.log(+"");

// concatenation
let apples = "2";
let oranges = "3";
console.log(apples + oranges + " concatenation");

/* Treating concatenated strings as numbers (Numeric conversion, unary+)

The unary plus (+) is applied only to a single value and doesn't do anything to numbers. 
But if the operand is not a number, which is a string then the unary plus convert it into a number.
*/

// No effect on numbers
let x_X = 1;
console.log(+x_X); // 1

let y_Y = -2;
console.log(+y_Y); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

console.log(+apples + +oranges + " Treating concatenated strings as numbers");
// Or we can use the Number() to convert the strings into numbers
console.log(Number(apples) + Number(oranges));

let a = 1 + +2;
console.log(++a);

console.log(4 / 3 ** 2);

/*  Short-circuit

If the condition is met and the rest of the conditions won’t affect the already evaluated result, the expression will short-circuit and return that result (value).

*/
function A() {
	console.log("called A");
	return false;
}

function B() {
	console.log("called B");
	return false;
}

function C() {
	console.log("Called C");
	return true;
}

console.log(C() || (B() && A()));
console.log((A() && C()) || B());

let person = {
	name: "Jack",
	age: 34,
};

console.log(person.age > 18 && "Driving allowed");

// Assignment = returns a value

let aa = 1;
let bb = 2;

let cc = 3 - (aa = bb + 1);
console.log(cc);

// Chaining assignments evaluate from right to left.
let AA, BB, CC;
AA = BB = CC = 2 + 2;

// For readability
CC = 2 + 2;
BB = CC;
AA = CC;
console.log(AA, BB, CC);

// Modify-in-Place - Applying an operator to a variable and store the new result in that same variable.
let n = 2;
n *= 3 + 5; // right part is evaluated first, same as n *= 8
// n = n * (3 + 5);
console.log(n);

// increment/decrement
let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);

// increment/increment among other operators
let counter1 = 1;
// console.log(2 * ++counter1); // 4
// console.log(2 * counter1++); // 2

// for readability
console.log(2 * counter1);
counter++;

/* One or more expressions, the last of which is returned as the value of the compound expression. 
It means only the last expression will evaluated.
*/

let add = (1 + 2, 3 + 4, 1 + 2);
console.log(add);

// Tasks

// The postfix and prefix forms
console.log("\nTasks");
let Ta = 1,
	Tb = 1;

console.log(++Ta);
console.log(Tb++);

console.log(Ta);
console.log(Tb);

// Assignment result
let Ta1 = 2;
let Tx = 1 + (Ta1 *= 2);
console.log(Tx);

// Type conversions
console.log("Type conversions");
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // Nan
console.log(" -9 " + 5); // - 9 5
console.log(" -9 " - 5); // - -14
console.log(null + 1); // 1
console.log(undefined + 1); // Nan
console.error(" \t \n" - 2); // -2

// Fix the addition

// console.log("Fix the addition");
// the first value starts with a string so the remaining values will turn into a string
// We can convert a string by using prepending them with + (unary operator) or by using the Number()
//         let firstNum = prompt("First number? ", 1);
//         let secondNum = prompt("Second number? ", 2);

//         alert(+firstNum + +secondNum);
