// Experiment 3 Activities

// 1. Arrow function with 2 examples
const square = (x) => x * x;
const greetUser = (name) => `Hello, ${name}`;

console.log("Square of 5:", square(5));
console.log(greetUser("Aayan"));

// 2. Write code for switch case
let day = 3;
console.log("\nSwitch Case (Day 3):");
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    default: console.log("Weekend");
}

// 3. Truthy and falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: Everything else ("0", " ", [], {}, etc.)
console.log("\n--- Truthy/Falsy Checks ---");
console.log("Is 0 truthy?", Boolean(0));
console.log("Is 'Hello' truthy?", Boolean("Hello"));
console.log("Is [] (empty array) truthy?", Boolean([]));

// 4. Use ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log("\nAge 20:", canVote);

// 5. Loops in JS
console.log("\nLoops Demo:");
// For Loop
for (let i = 0; i < 3; i++) console.log("For:", i);
// While Loop
let j = 0;
while (j < 3) { console.log("While:", j); j++; }
// Do-While Loop
let k = 0;
do { console.log("Do-While:", k); k++; } while (k < 3);

// 6. Map and filter function in JS
let nums = [1, 2, 3, 4, 5, 6];

// Filter: Keeps elements that match condition
let evens = nums.filter(n => n % 2 === 0);
console.log("\nFilter (Evens):", evens);

// Map: Transforms each element
let doubled = nums.map(n => n * 2);
console.log("Map (Doubled):", doubled);
