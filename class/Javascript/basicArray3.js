let superhero = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
console.log("Superhero Array: " + superhero);

let villains = ['Joker', 'Thanos', 'Loki', 'Green Goblin'];
console.log("Villains Array: " + villains);

superhero.push(villains);
console.log("After adding villains to superheroes: " + superhero);

console.log(superhero[3]); // Accessing element at index 3

console.log(superhero[2][2]);

superhero.concat(villains);
console.log( superhero.concat(villains));

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];// nested array
const realanotherarr = anotherarr.flat(Infinity);// flattening nested array

console.log(realanotherarr);

const another = anotherarr.flat(2);
console.log(another);

console.log(Array.isArray("Aayan"));// checking if string is array
//used for data scripting and manipulation using this methode ,   asking question to array is array or not

console.log(Array.from("Aayan"));// converting string to array
//used to convert string into array for further manipulation and data scripting

console.log(Array.from( {Name : "Aayan" , age : 21}));
// gives empty array directly not converts into key value pair array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));// creating array from individual elements
// used to create array from individual elements directly without declaring array first

// --- Additional Array Methods ---

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("\nOriginal Fruits:", fruits);

// 1. slice(start, end) -> Returns a NEW array without modifying original
// Extracts elements from index 1 to 3 (not including 3)
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced (1, 3):", slicedFruits);
console.log("Fruits after slice (no change):", fruits);

// 2. splice(start, deleteCount, items...) -> MODIFIES original array
// Removes 2 elements starting from index 1 and adds "Mango"
let removedFruits = fruits.splice(1, 2, "Mango");
console.log("Removed by splice:", removedFruits);
console.log("Fruits after splice (modified):", fruits);

// 3. toSpliced(start, deleteCount, items...) -> Returns a NEW modified array (Original is NOT changed)
// This is a newer method (ES2023)
if (fruits.toSpliced) {
    let newSplicedFruits = fruits.toSpliced(0, 1, "Pineapple");
    console.log("toSpliced (New Array):", newSplicedFruits);
    console.log("Original fruits after toSpliced (no change):", fruits);
} else {
    console.log("toSpliced() is not supported in this environment (needs Node.js 20+).");
}
