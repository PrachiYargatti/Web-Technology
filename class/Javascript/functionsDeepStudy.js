// 1. Function Deep Study

// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// ==========================================
// 1. Function Declaration (Standard Way)
// ==========================================
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("Function Declaration:", greet("Aayan"));

// ==========================================
// 2. Function Expression (Anonymous Function)
// ==========================================
// Functions can be stored in variables.
const add = function(a, b) {
    return a + b;
};
console.log("Function Expression (Sum):", add(5, 10));

// ==========================================
// 3. Arrow Functions (ES6)
// ==========================================
// A shorter syntax for writing functions.
const multiply = (x, y) => x * y;
console.log("Arrow Function (Product):", multiply(4, 3));

// ==========================================
// 4. Function Parameters and Arguments
// ==========================================
// Default Parameters
function welcome(user = "Guest") {
    console.log(`Welcome, ${user}`);
}
welcome(); // Uses default
welcome("Aayan"); // Uses provided value

// Rest Parameters (...args)
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum with Rest Parameters:", sumAll(1, 2, 3, 4, 5));

// ==========================================
// 5. Scopes (Local vs Global)
// ==========================================
let globalVar = "I am global";

function scopeTest() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}
scopeTest();
// console.log(localVar); // Error: localVar is not defined here

// ==========================================
// 6. Immediately Invoked Function Expressions (IIFE)
// ==========================================
// Runs as soon as it is defined.
(function() {
    console.log("This is an IIFE! Runs immediately.");
})();

// ==========================================
// 7. Higher Order Functions
// ==========================================
// Functions that take other functions as arguments.
function operate(func, val1, val2) {
    return func(val1, val2);
}
console.log("Higher Order Function (Subtract):", operate((a, b) => a - b, 20, 5));
