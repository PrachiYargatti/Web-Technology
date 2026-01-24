//reverse number
//palindrome 
//fibonacci series
//array : find largest no, remove duplicate element, find missing number
//string: reverse string, vowels, check palindrome in string 
//number: check prime no, factorial no
//function: even or odd, sum of array

console.log("-----Activity 1: Reverse Number-----");
document.writeln("-----Activity 1: Reverse Number-----<br>");
let n = 12345;
let original = n;
let rev = 0;

while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
}
console.log(`Reverse number of ${original} is ${rev}`);
document.writeln(`Reverse number of ${original} is ${rev}<br><br>`);

console.log("-----Activity 2: Palindrome Check-----");
document.writeln("-----Activity 2: Palindrome Check-----<br>");

// Use built-in prompt() for browsers
// let input = prompt("Enter number to check palindrome:");
// let num = Number(input);
let num = 535;
let org = num;
let r = 0;

while (num > 0) {
    r = r * 10 + (num % 10);
    num = Math.floor(num / 10);
}
let message = (r === org) ? `The ${org} is a palindrome` : `The ${org} is not a palindrome`;
console.log(message);
document.writeln(message + "<br><br>");

console.log("-----Activity 3: Fibonacci Series-----");
document.writeln("-----Activity 3: Fibonacci Series-----<br>");
function fibonacci_series(a, b, count) {
    for (let i = 0; i < count; i++) {
        console.log(a);
        document.writeln(a + " ");
        let next = a + b;
        a = b;
        b = next;
    }
    document.writeln("<br><br>");
}
fibonacci_series(0, 1, 8);

console.log("-----Activity 4: Array Operations-----");
document.writeln("-----Activity 4: Array Operations-----<br>");

let arr = new Array(1, 2, 3, 4, 5, 3, 2, 1);
console.log("Original Array:", arr);
document.writeln("Original Array: " + arr + "<br>");

// Find largest number
let largest = Math.max(...arr);
console.log("Largest Number in Array:", largest);
document.writeln("Largest Number in Array: " + largest + "<br>");

// Remove duplicate elements
let uniqueArr = [...new Set(arr)];
console.log("Array after removing duplicates:", uniqueArr);
document.writeln("Array after removing duplicates: " + uniqueArr + "<br>");

// Find missing number in a sequence
let fullArr = [];
for (let i = 1; i <= 5; i++) {
    fullArr.push(i);
}
let missing = fullArr.filter(x => !arr.includes(x));
console.log("Missing Numbers in Array:", missing);
document.writeln("Missing Numbers in Array: " + missing + "<br><br>");

console.log("-----Activity 5: String Operations-----");
document.writeln("-----Activity 5: String Operations-----<br>");

let str = new String('madam');
console.log("Original String:", str);
document.writeln("Original String: " + str + "<br>");

// Reverse string
let revStr = str.split('').reverse().join(''); //arr.reverse().join('')
console.log("Reversed String:", revStr);
document.writeln("Reversed String: " + revStr + "<br>");

// Count vowels
// let vowelCount = str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
let vowelCount = 0;
for(let char of str.toLowerCase()){
    if('aeiou'.includes(char)){
        vowelCount++;
    }
}
console.log("Number of Vowels in String:", vowelCount);
document.writeln("Number of Vowels in String: " + vowelCount + "<br>");

// Check palindrome in string
// let palindromeMessage = (str.valueOf() === revStr) ? ...
let palindromeMessage = (str.toString() === revStr) ? `The string "${str}" is a palindrome` : `The string "${str}" is not a palindrome`;
console.log(palindromeMessage);
document.writeln(palindromeMessage + "<br><br>");

console.log("-----Activity 6: Number Operations-----");
document.writeln("-----Activity 6: Number Operations-----<br>");

let primeNum = 29;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break;
    }
}
let primeMessage = isPrime ? `${primeNum} is a prime number` : `${primeNum} is not a prime number`;
console.log(primeMessage);
document.writeln(primeMessage + "<br>");

let factNum = 5;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log(`Factorial of ${factNum} is ${factorial}`);
document.writeln(`Factorial of ${factNum} is ${factorial}<br><br>`);

console.log("-----Activity 7: Function Operations-----");
document.writeln("-----Activity 7: Function Operations-----<br>");

function isEvenOrOdd(number) {
    return (number % 2 === 0) ? `${number} is Even` : `${number} is Odd`;
}
let testNum = 42;
let evenOddMessage = isEvenOrOdd(testNum);
console.log(evenOddMessage);
document.writeln(evenOddMessage + "<br>");

function sumOfArray(array) {
    return array.reduce((acc, val) => acc + val, 0);
}
let sumArr = [1, 2, 3, 4, 5];
let sumMessage = `Sum of Array [${sumArr}] is ${sumOfArray(sumArr)}`;
console.log(sumMessage);
document.writeln(sumMessage + "<br>");

//acc = accumulator (stores the running total)
//val = current value (element being processed)
//0 = initial value of accumulator