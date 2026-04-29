// Experiment 1 Activities

// 1. Display Student information
let student = {
    name: "Aayan Mujawar",
    age: 21,
    course: "Web Technology",
    year: "3rd Year"
};
console.log("--- Student Information ---");
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Course: ${student.course}`);
console.log(`Year: ${student.year}`);

// 2. Check whether the number is even or odd
let num = 7;
if (num % 2 === 0) {
    console.log(`\n${num} is Even.`);
} else {
    console.log(`\n${num} is Odd.`);
}

// 3. Check whether student pass or fail
let marks = 85;
if (marks >= 40) {
    console.log("Result: PASS");
} else {
    console.log("Result: FAIL");
}

// 4. Print numbers from 1 to 10
console.log("\nNumbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5. Assign values from one variable to another
let a = 100;
let b = a;
console.log(`\nVariable a: ${a}, Variable b: ${b} (assigned from a)`);

// 6. Print output to browser console
// (Note: This is already being done using console.log() which works in both Node.js and Browser)
console.log("\nThis output is printed to the console.");
