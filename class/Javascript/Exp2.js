// Experiment 2 Activities

// 1. Array, function, object declare and print example
let myArr = [10, 20, 30];
let myObj = { brand: "Tesla", model: "S" };
function myFunc() { return "I am a function"; }

console.log("Array:", myArr);
console.log("Object:", myObj);
console.log("Function Call:", myFunc());

// 2. Reverse the number
function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
console.log("\nReverse of 12345:", reverseNumber(12345));

// 3. Check whether the string is palindrome or not
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));

// 4. Fibonacci series code
function fibonacci(n) {
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
console.log("\nFibonacci (first 10):", fibonacci(10));

// 5. Count vowels in string
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));

// 6. Find largest element in array
let numbers = [5, 20, 45, 12, 60, 3];
console.log("\nLargest in [5, 20, 45, 12, 60, 3]:", Math.max(...numbers));

// 7. Remove duplicates from array
let duplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(duplicates)];
console.log("Unique array:", unique);

// 8. Find missing number in array (from 1 to n)
function findMissing(arr, n) {
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}
console.log("Missing number in [1, 2, 4, 5] (n=5):", findMissing([1, 2, 4, 5], 5));

// 9. Function to find even or odd
const checkEvenOdd = (n) => n % 2 === 0 ? "Even" : "Odd";
console.log("15 is:", checkEvenOdd(15));

// 10. Write code for sum of array
let sumArr = [1, 2, 3, 4, 5];
let totalSum = sumArr.reduce((acc, val) => acc + val, 0);
console.log("Sum of [1, 2, 3, 4, 5]:", totalSum);
