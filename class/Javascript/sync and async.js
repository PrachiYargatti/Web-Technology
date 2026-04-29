console.log("Start");

setTimeout(() => {
    console.log("This is a message from setTimeout");
}, 2000);

console.log("End");
//Output:
// Start
// End
// This is a message from setTimeout (after 2 seconds)

//setTimeout is an asynchronous function that allows us to execute a piece of code after a specified delay. In this example, the message from setTimeout will be logged after 2 seconds, while the "Start" and "End" messages are logged immediately.   


// SYNC AND ASYNC
// CODE:
//1)what is sync and async code?
//ans:
//Synchronous code is executed in a sequential manner, where each operation must complete before the next one begins. In contrast, asynchronous code allows multiple operations to run concurrently, without waiting for each other to finish. This is often achieved using callbacks, promises, or async/await syntax in JavaScript.

//2)what is callback function?
//ans:
//A callback function is a function that is passed as an argument to another function and is executed after a certain event or condition is met. It allows for asynchronous programming by enabling code to be executed after a specific task is completed, without blocking the main thread of execution. Callback functions are commonly used in JavaScript for handling events, making API calls, and performing operations that take time to complete.  

// code for sync and async code
//Synchronous code example
function syncFunction() {
    console.log("This is synchronous code.");
}
syncFunction();

//Asynchronous code example using setTimeout
function asyncFunction() {
    setTimeout(() => {
        console.log("This is asynchronous code.");
    }, 1000);
}   
asyncFunction();

// ==========================================
// 1. Blocking vs Non-Blocking Examples
// ==========================================

// --- Blocking (Sync) Example ---
console.log("\n--- Blocking Demo ---");
function blockThread() {
    console.log("Blocking task starts...");
    const start = Date.now();
    while (Date.now() - start < 2000) { } // Blocks for 2 seconds
    console.log("Blocking task finished after 2s");
}
blockThread();
console.log("This line waits for the block to finish.");

// --- Non-Blocking (Async) Example ---
console.log("\n--- Non-Blocking Demo ---");
console.log("Async task starts...");
setTimeout(() => {
    console.log("Async task finished after 2s");
}, 2000);
console.log("This line does NOT wait for the async task!");

// ==========================================
// 2. Real Life Examples
// ==========================================

// --- Real Life: Synchronous ---
// Analogy: ATM Machine. 
// You have to wait for the person in front to finish their transaction before you can use it. 
// The machine handles one person at a time.

// --- Real Life: Asynchronous ---
// Analogy: Restaurant Kitchen. 
// The waiter takes your order and gives it to the kitchen. 
// The waiter doesn't stand there waiting for your food; they go take other orders. 
// When your food is ready, it's brought to you.

