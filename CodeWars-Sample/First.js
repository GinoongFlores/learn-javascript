function multiply() {
    return a * b;
}

// Best practice
let multiplier = (a, b) => a * b;

// Reversed a String
function solution(str) {
    const arr = str.split("");
    const reversed = arr.reverse();
    const joinedStr = reversed.join("");

    return joinedStr;
}

// Best practice from stackoverflow 
function solution(str) {
    return str.split("").reverse().join("");
}