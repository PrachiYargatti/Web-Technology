// thiss is good way for printing so further we will we using this way in console.log : backtick
const str1 = "Hello "
console.log(str1);
console.log(`Hello world ! ${str1}`);



const str2 = new String("Aayan");
console.log(str2);


console.log();

console.log(str2.length);
console.log(str2[0]);
console.log(str2[4]);
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());
console.log(str2.charAt(2));
console.log(str2.indexOf('y'));

console.log();

const str3 = new String("    Aayan    Mujawar    ")
console.log(str3.trim());
console.log(str3.length);


// Activity :  All string methoods , attributes to be used..


// Activity: All commonly used String methods & properties in JavaScript

// String declaration
let text = "  Hello JavaScript World  ";

// =======================
// 🔹 String Properties
// =======================

// length → returns total number of characters
console.log("Length:", text.length);

// =======================
// 🔹 String Methods
// =======================

// trim() → removes spaces from start and end
console.log("Trim:", text.trim());

// toUpperCase() → converts string to uppercase
console.log("Uppercase:", text.toUpperCase());

// toLowerCase() → converts string to lowercase
console.log("Lowercase:", text.toLowerCase());

// charAt(index) → returns character at given index
console.log("Character at index 2:", text.charAt(2));

// indexOf(value) → returns first index of value
console.log("Index of 'Java':", text.indexOf("Java"));

// lastIndexOf(value) → returns last index of value
console.log("Last index of 'o':", text.lastIndexOf("o"));

// includes(value) → checks if value exists (true/false)
console.log("Includes 'World':", text.includes("World"));

// startsWith(value) → checks starting characters
console.log("Starts with 'Hello':", text.trim().startsWith("Hello"));

// endsWith(value) → checks ending characters
console.log("Ends with 'World':", text.trim().endsWith("World"));

// slice(start, end) → extracts part of string
console.log("Slice:", text.slice(2, 7));

// substring(start, end) → similar to slice (no negative index)
console.log("Substring:", text.substring(2, 7));

// substr(start, length) → extracts string (deprecated but asked sometimes)
console.log("Substr:", text.substr(2, 5));

// replace(old, new) → replaces first match
console.log("Replace:", text.replace("JavaScript", "JS"));

// replaceAll(old, new) → replaces all matches
console.log("Replace All:", text.replaceAll(" ", "-"));

// split(separator) → converts string to array
console.log("Split:", text.trim().split(" "));

// concat() → joins strings
let stra = "Hello";
let strb = "World";
console.log("Concat:", stra.concat(" ", strb));

// repeat(count) → repeats string
console.log("Repeat:", "Hi ".repeat(3));

// padStart(length, value) → adds padding at start
console.log("Pad Start:", "5".padStart(3, "0"));

// padEnd(length, value) → adds padding at end
console.log("Pad End:", "5".padEnd(3, "0"));

// match(regex) → returns matches using regex
console.log("Match:", text.match(/o/g));

// search(regex) → returns index of match
console.log("Search:", text.search("JavaScript"));

// =======================
// 🔹 Type Conversion
// =======================

// Convert string to number
let numStr = "123";
console.log("Number:", Number(numStr));

// Convert other types to string
let num = 100;
console.log("String:", String(num));


