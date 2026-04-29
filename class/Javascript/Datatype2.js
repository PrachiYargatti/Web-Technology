// to give unique id symbol is used
console.log();

let num = Symbol('49')
let num2 = Symbol('84')
let id = 84
console.log(typeof(num));
console.log(num2)

console.log(num2===id) // false

console.log()

// Arrays

const array = [1,2,3,4,5]
console.log(array);
console.log(typeof(array));

console.log()
// objects

const obj = 
{
    name : "Aayan",
    age : 21
}
console.log(obj)
console.log(typeof(obj));

console.log(obj.name);





// Activity := how to do  : Function declaration , defination , calling
// Activity: How to use a function in JavaScript

// 1️⃣ Function Declaration & Definition
// This function is declared using the 'function' keyword
// It takes two parameters: a and b
// The function body defines what the function will do
function addNumbers(a, b) {
    // This line returns the sum of a and b
    return a + b;
}

// 2️⃣ Calling the Function
// Here we call the function by passing arguments (10 and 20)
// The returned value is stored in the variable 'result'
let result = addNumbers(10, 20);

// 3️⃣ Output
// Printing the result to the console
console.log("Sum is:", result);

// Functions
console.log();





let f = function Call()
{
    console.log("HII JS!!")
}
console.log(f);



// memory

let myYoutubeName = "ATM"
let newYoutubeName = myYoutubeName

newYoutubeName = "ABC"
console.log(myYoutubeName);
console.log(newYoutubeName);


let user1 = 
{
    email : "abc@gmail.com",
    id : "23uam079"
}
let user2 = user1
user2.email = "cba@gmail.com"
console.log(user1.email);

console.log(user2.email);




//primitive datatype is store in stack when we assign one var to another a copy is made so 

// non primitive datatype store in heap memory when we assign one var to another var reference 

