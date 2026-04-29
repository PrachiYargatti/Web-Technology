//object Singleton:

const user = new Object();// singleton object
console.log(user);

console.log();

const user2 = new Object();

user2.id = 49;
user2.email = "abcmail.com";
user2.name = "aayan";
user2.city = "Ichalskaranji";
user2.age = 21;
user2.islogin = true;
user2.lastlogin = ['Mon','sat'];
console.log(user2);

//non - singleton object
// nested objects;

const regUser = 
{
    email : "nsjhb",
    password : "asdasd",
    user1 :
    {
        name : 
        {
            start:"Aayan",
            last : "mujawar"
        },
        age : 21
    }
};

console.log(regUser);
console.log();
console.log(regUser.user1.name.start);



