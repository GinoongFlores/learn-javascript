/* 
    * A real example of a conditional statement.
    * If the child would help his/her parent for shopping then the child would have an extra allowance if not the allowance is lessen. 

*/

let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
    childAllowance = 10;
    console.log(childAllowance);
} else {
    childAllowance = 5;
    console.log(childAllowance);
}

// * From previous example
// * We don't need to explicitly specify 'shoppingDone == true' 

if (shoppingDone) {
    childAllowance = 10;
    console.log(childAllowance);
} else {
    childAllowance = 5;
    console.log(childAllowance);
}


// * Testing boolean (true/false)
// * Using the same variable on its own to test whether it is true, or even that it exists (that is, it is not undefine)

let cheese = 'cheddar';
if (cheese) {
    console.log('Yay! Cheese available for making a on toast.');
} else {
    console.log('No cheese on toast for you today.');
}

