//we can declare two types of objeccts :-> object literals 
//                                      -> object singleton

//OBJECT LITERALS
let user = {
    name : "Aayan",
    email:"mujawaraayan9@gmail.com",
    age:21,
    city:"ICH",
    islogin : true,
    lastLogin : ['Monday','Tuesday'],
    "full Name ": "Aayan Mujawar"

}
console.log(user);
console.log();
console.log(user.email);
console.log();
console.log(user.lastLogin);


console.log();
console.log(user["full Name "]);// not good coding

console.log();
user.email = "cr7@gmail.com"

console.log();
console.log(user);//freezes the object vallues..

// Object.freeze(user)// 

user.email = "abcde@gmail.com"

console.log();
console.log(user);//not any change will occur in the object..

//symbol example:

const mysymbol= Symbol("JS")
const myobj1 = {
    mysymbol : "j"
}
console.log();
console.log(myobj1["mysymbol"]);
console.log();
console.log(typeof(myobj1));
console.log();

console.log();
// create a symbol and add it in object key and print the symbol


user.greeting = function (){
    console.log("hello.js");
    
}
console.log(user.greeting());


console.log();

user.greeting2 = function (params) {
    console.log(`hello ${this.name} `);// "this" is used to keys of object in other functions of its key..
    
    
}
console.log(user.greeting2());
console.log();




