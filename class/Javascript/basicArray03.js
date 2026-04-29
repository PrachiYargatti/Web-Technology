let a = [10, 20, 30, 40, 50,"h"];// array declaration
console.log("Original Array: " + a);// array print

const b = [1, 2, 3, 4, 5];// array declaration using const
console.log("New Array: " + b);

let c = new Array(6, 7, 8, 9, 10);
console.log("Array using new keyword: " + c);

console.log(a[1]); // Accessing element at index 1

//array methods
a.push(60); // adding element at the end
console.log("After push: " + a);
a.pop(); // removing last element
console.log("After pop: " + a);

a.unshift(5); // adding element at the beginning
console.log("After unshift: " + a);

a.shift();// removing first element
console.log("After shift: " + a);

a.includes(30); // checking if 30 is in array
console.log("Array includes 30: " + a.includes(30));

a.indexOf(40); // finding index of 40
console.log("Index of 40: " + a.indexOf(40));

typeof(a); // checking type of array
console.log("Type of a: " + typeof(a));

const newarr = a.join();
console.log("Joined array: " + newarr);

