// const accountId = 101
// accountId = 201
// console.log(accountId) //TypeError : Assignment to constant variable

// let a = 10
// var b = 20 

// {
//     let a = 100
//     var b = 200
//     console.log(a, b) //100 200 
// }

// console.log(a, b)//10 200

// //	Standard numeric type.
// let accNo = 5;
// console.log(typeof(accNo));

// // sequence of characters.
// let accName = "Prachi"
// console.log(typeof(accName));

// let isTrue = false
// console.log(typeof(isTrue));

// //Used for integers larger than \(2^{53}-1\).
// let isBigInt = 100n
// console.log(typeof(isBigInt));

// let isNull = null 
// console.log(typeof(isNull)); //object

// // A variable that has been declared but not assigned a value.
// let undefinedVar;
// console.log(typeof(undefinedVar)); //undefined 

// // Used to create unique, immutable identifiers.
// let id = 45
// let unique = Symbol(id)
// console.log(typeof(unique)) //symbol

// console.table([typeof(accNo), typeof(accName), typeof(isTrue), typeof(isBigInt), typeof(isNull), typeof(undefinedVar), typeof(unique)])
// console.table([accNo, accName, isTrue, isBigInt, isNull, undefinedVar, unique])

// //Activity 1)
// //display students info with variables

// let stu_name = "prachi"
// let prn = '23UAM138'
// let branch = 'AIML'
// let year = 3
// let age = 20
// let email = 'prachi@gmail.com'
// let add_city = 'ichalkaranji'

// console.table({"name": stu_name, "prn": prn, "branch": branch, "year": year, "age": age, "email": email, "add-city": add_city})

//activity 2)
//odd even number check

// Use prompt() instead of console.prompt()
// Adding a '+' converts the string input into a number
// const prompt = require('prompt-sync')();
// let num = +prompt("Enter a number: ")

// if (num % 2 == 0) {
//     console.log(`${num} is even number`)
// }       
// else {
//     console.log(`${num} is odd number`)
// }

// //Activity 3)
// //student pass fail

// const prompt = require('prompt-sync')();
// marks = +prompt("Enter your marks: ")
// if(marks >= 40){
//     console.log("Student is pass")
// }
// else{
//     console.log("Student is fail")
// }

// Activity 4)
// display numbers using loop
for(let i=1; i<=10; i++){
    document.writeln(i+"<br>")
}

// Activity 5)
let x = 20
let y = x 
document.writeln(x, y) //20 20
x = 200
document.writeln(x, y) //200 20