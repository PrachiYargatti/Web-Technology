console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log();

console.log("2">1);// Avoid such comparisons it doesnt give proper output
console.log("02" > 1);// Avoid such comparisons it doesnt give proper output
console.log("null > 0:", null > 0);   // false
console.log("null == 0:", null == 0);  // false
console.log("null >= 0:", null >= 0);  // true (Equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0.)

console.log("undefined == 0:", undefined == 0); // false
console.log("undefined > 0:", undefined > 0);   // false
console.log("undefined < 0:", undefined < 0);   // false (undefined is converted to NaN)


console.log()

console.log("2" === 2);







