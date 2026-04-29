const balance = new Number(1234);

console.log(balance);

console.log(balance.toFixed(2));
// when we build e-commerce website and precisions values is soo long then we use tofixed .

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toLocaleString());

const a = 123456789

console.log(a.toLocaleString());

console.log(a.toLocaleString('en-IN'));// used to make the commas as based on IN i,e Indian type.
console.log();

// Math Operations 

console.log(Math);

console.log(Math.abs(-432.99));// negative convert to positive and positive remains as it is as by using in abs
console.log(Math.floor(4.6));// chooses low value
console.log(Math.ceil(4.6));// chooses top value 
console.log(Math.round(4.6));// 

console.log(Math.min(4,7,8,9));
console.log(Math.max(5,4,9,3,49));


// Activity : making of all Math attritbutes



// Activity: Using all Math attributes (properties) & methods in JavaScript

// =======================
// 🔹 Math Properties (Constants)
// =======================

console.log("PI:", Math.PI);           // Value of π
console.log("E:", Math.E);             // Euler's number
console.log("SQRT2:", Math.SQRT2);     // Square root of 2
console.log("SQRT1_2:", Math.SQRT1_2); // Square root of 1/2
console.log("LN2:", Math.LN2);         // Natural log of 2
console.log("LN10:", Math.LN10);       // Natural log of 10
console.log("LOG2E:", Math.LOG2E);     // Log base 2 of E
console.log("LOG10E:", Math.LOG10E);   // Log base 10 of E

// =======================
// 🔹 Math Methods
// =======================

// round() → rounds to nearest integer
console.log("Round:", Math.round(4.6));

// floor() → rounds down
console.log("Floor:", Math.floor(4.9));

// ceil() → rounds up
console.log("Ceil:", Math.ceil(4.1));

// trunc() → removes decimal part
console.log("Trunc:", Math.trunc(4.9));

// abs() → absolute value
console.log("Absolute:", Math.abs(-10));

// pow(x, y) → x raised to power y
console.log("Power:", Math.pow(2, 3));

// sqrt(x) → square root
console.log("Square Root:", Math.sqrt(16));

// cbrt(x) → cube root
console.log("Cube Root:", Math.cbrt(27));

// min() → smallest value
console.log("Min:", Math.min(10, 5, 20));

// max() → largest value
console.log("Max:", Math.max(10, 5, 20));

// random() → random number between 0 and 1
// Why we use Math.random(): 
// It is essential for generating unpredictable values. 
// Uses: OTP generation, random dice rolls, choosing random items from an array, game logic, etc.
console.log("Random:", Math.random());

// Random number between two values (example: 1 to 10)
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", randomNum);

// sign() → returns sign of number
console.log("Sign:", Math.sign(-5));

// log(x) → natural log
console.log("Log:", Math.log(10));

// log10(x) → base 10 log
console.log("Log10:", Math.log10(100));

// log2(x) → base 2 log
console.log("Log2:", Math.log2(8));

// sin(x), cos(x), tan(x) → trigonometric functions (in radians)
console.log("Sin:", Math.sin(Math.PI / 2));
console.log("Cos:", Math.cos(0));
console.log("Tan:", Math.tan(Math.PI / 4));

// =======================
// 🔹 Special Checks
// =======================

// isNaN() → checks if value is Not a Number
console.log("Is NaN:", isNaN("abc"));

// isFinite() → checks if value is finite
console.log("Is Finite:", isFinite(100));
