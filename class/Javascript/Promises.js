
//promises: a promises is an object that represents future result for an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.
//promises allow us to handle asynchronous operations in a more manageable way, avoiding callback hell and making our code more readable.

let mypromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an asynchronous operation

    if (success) {
        resolve("The operation was successful!"); // Resolving the promise with a success message
    } else {
        reject("The operation failed."); // Rejecting the promise with an error message
    }
});

mypromise.then((result) => {
    console.log(result); // This will log the success message if the promise is resolved
}).catch((error) => {
    console.error(error); // This will log the error message if the promise is rejected
});


//In this example, we create a new promise that simulates an asynchronous operation. The promise is resolved with a success message if the operation is successful, and rejected with an error message if it fails. We then use the .then() method to handle the resolved value and the .catch() method to handle any errors that may occur.
//resolve = successful completion of the promise, while reject = failure of the promise.
//reject= an error that occurs during the execution of the promise. It can be used to indicate that something went wrong and provide information about the error. When a promise is rejected, it will trigger the .catch() method, allowing us to handle the error gracefully in our code.


// ==========================================n// Why Promises are better than Callbacks?n// ==========================================n// 1. Avoids Callback Hell: Nested callbacks make code hard to read (Pyramid of Doom). Promises use .then() chaining.n// 2. Better Error Handling: A single .catch() can handle errors for the entire chain.n// 3. Readability: Promises follow a more linear, easy-to-understand flow.n// 4. Inversion of Control: With callbacks, you trust a third-party to call your function. Promises return a result object you control.nn// ==========================================n// 4 Examples of Promisesn// ==========================================nn// Example 1: Simple Success/Failurenconst checkNumber = new Promise((resolve, reject) => {n    const num = 10;n    if (num > 5) resolve('Greater than 5');n    else reject('Less than 5');n});ncheckNumber.then(console.log).catch(console.error);nn// Example 2: Promise with setTimeout (Delayed Resolution)nconst delayedHello = new Promise((resolve) => {n    setTimeout(() => resolve('Hello after 3 seconds!'), 3000);n});ndelayedHello.then(console.log);nn// Example 3: Chainable Promisesnnew Promise((resolve) => resolve(10))n    .then(num => num * 2)n    .then(num => num + 5)n    .then(final => console.log('Chained Result:', final));nn// Example 4: Promise.all (Running multiple promises concurrently)nconst p1 = Promise.resolve('Task 1 complete');nconst p2 = new Promise(res => setTimeout(() => res('Task 2 complete'), 1000));nPromise.all([p1, p2]).then(results => console.log('All results:', results));
