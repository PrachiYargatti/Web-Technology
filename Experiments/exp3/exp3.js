//write code for arrow functions with 2 examples 
//write code for switch case in JS
//How to use truthy and falsy value in JS with examples 
//how to use ternary operator in JS
//write a code for howto use loops in array => while, do while, for, forEach, forIn, forOf
//diff between for in and for of loop
//how to use map and filter function in JS

console.log("--- Activity 1 => write code for arrow functions with 2 examples ---");

const multiply = (n1, n2) => {
    return n1 * n2;
}
console.log(`arrow function for multiplication of two numbers (4,5): `+multiply(4,5));

const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
}
console.log(`arrow function for addition of two numbers (4,5): `+addTwoNumbers(4,5));

console.log("--- Activity 2 => write code for switch case in JS ---");

let char = 'A';
switch(char.toLowerCase()){
    case 'a': console.log('vowel'); break;
    case 'e': console.log('vowel'); break;
    case 'i': console.log('vowel'); break;
    case 'o': console.log('vowel'); break;
    case 'u': console.log('vowel'); break;
    default:
        console.log('consonents');
}

console.log("--- Activity 3 => How to use truthy and falsy value in JS with examples ---");

// Common falsy values: false, 0, '', null, undefined, NaN
const falsyExamples = [false, 0, '', null, undefined, NaN];
falsyExamples.forEach((val, idx) => {
    console.log(`falsyExamples[${idx}] (${String(val)}):`, !!val ? 'truthy' : 'falsy');
});

// Truthy examples: non-empty string, non-zero number, objects, arrays
const truthyExamples = ['hello', 1, {}, [], -5];
truthyExamples.forEach((val, idx) => {
    console.log(`truthyExamples[${idx}] (${String(val)}):`, !!val ? 'truthy' : 'falsy');
});

console.log("--- Activity 4 => how to use ternary operator in JS ---");
const age = 18;
const access = age >= 18 ? 'Allowed' : 'Denied';
console.log(`Age ${age}:`, access);

console.log("--- Activity 5 => how to use loops with arrays (while, do-while, for, forEach, for-in, for-of) ---");
const arr = [10, 20, 30, 40];

// while
let i = 0;
console.log('while loop start');
while (i < arr.length) {
    console.log(`while index ${i}:`, arr[i]);
    i++;
}

// do-while
let j = 0;
console.log('do-while loop start');
do {
    console.log(`do-while index ${j}:`, arr[j]);
    j++;
} while (j < arr.length);

// classic for
console.log('for loop start');
for (let k = 0; k < arr.length; k++) {
    console.log(`for index ${k}:`, arr[k]);
}

// forEach
console.log('forEach start');
arr.forEach((value, index) => console.log(`forEach index ${index}:`, value));

// for-in (iterates keys/indexes)
console.log('for-in start (iterates indexes)');
for (const idx in arr) {
    console.log(`for-in index ${idx}:`, arr[idx]);
}

// for-of (iterates values)
console.log('for-of start (iterates values)');
for (const value of arr) {
    console.log('for-of value:', value);
}

console.log('--- Activity 6 => diff between for-in and for-of loop ---');
console.log('for-in returns indexes (or keys). for-of returns values (iterables).');

console.log('--- Activity 7 => how to use map and filter function in JS ---');
const doubled = arr.map(x => x * 2);
console.log('map (doubled):', doubled);

const filtered = arr.filter(x => x > 15);
console.log('filter (>15):', filtered);
