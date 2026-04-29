let myDate = new Date()

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toISOString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.getDate());
console.log(myDate.getMonth())
console.log(myDate.getDay());

console.log();

let myCreatedDate = new Date(2026,1,21)
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

console.log();

let myCreatedNewDate = new Date("01-21-2026")
console.log(myCreatedNewDate);
console.log(myCreatedNewDate.toLocaleString());

console.log();

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// Activity : printing real time
console.log(Date.now() / 1000);// converts to seconds
console.log();

console.log(myCreatedNewDate.getTime());
console.log();

console.log(Math.floor(Date.now()/1000));

console.log();

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getUTCDate());
console.log();

console.log(newDate.toLocaleString('default',{weekday : "long"}));












