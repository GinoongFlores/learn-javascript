
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// * or using ternary operator 

function evenOrOdd(number) {
    return number % 2 ? "Odd" : "Even";
}