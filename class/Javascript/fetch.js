//fetch is inbuilt javasript method used to make http requests to a server and retrieve data. It returns a promise that resolves to the response of the request. The fetch method takes in a URL as an argument and can also accept additional options such as method, headers, and body.

//Example of using fetch to retrieve data from an API

// 1. Line-by-Line Understanding of Fetch:
fetch("https://jsonplaceholder.typicode.com/users/7") // Line 1: Starts a request to the URL. Returns a Promise.
.then((response) => {                                // Line 2: .then() runs when the request is successful. 'response' is the HTTP response.
    return response.json();                          // Line 3: Converts the raw response body into a JavaScript object (JSON). Returns another Promise.
}) 
.catch((error) => {                                  // Line 4: .catch() runs if ANY error occurs in the process (network error, etc).
    console.error("Error fetching data:", error);    // Line 5: Logs the error details.
})
.then((data) => {                                    // Line 6: Runs after response.json() resolves. 'data' is the actual JS object.
    console.log(data);                               // Line 7: Logs the final data (User 7's details).
});

//In this example, we use the fetch method to make a GET request to the JSONPlaceholder API to retrieve a list of users. We then use the .then() method to handle the response and convert it to a JSON object. If there are any errors during the fetch operation, we catch them and log an error message to the console.

//Activities:
// where we use promises in company level projects?
// Promises are commonly used in company-level projects for handling asynchronous operations such as API calls, database queries, and file operations. They help to manage the flow of asynchronous code and avoid callback hell, making the code more readable and maintainable. For example, when making an API call to fetch data from a server, we can use promises to handle the response and any potential errors that may occur during the request. This allows us to write cleaner and more efficient code when dealing with asynchronous tasks in our projects.


//2)why promises better than callbacks?
// Promises are better than callbacks for several reasons:
// 1. Improved readability: Promises provide a cleaner and more readable syntax compared to nested callbacks, which can lead to callback hell and make the code difficult to understand.
// 2. Better error handling: Promises allow for better error handling through the use of .catch() method, which can catch errors at any point in the promise chain. In contrast, callbacks require manual error handling at each level, which can be cumbersome and error-prone.
// 3. Chaining: Promises allow for chaining multiple asynchronous operations together, making it easier to manage complex workflows. With callbacks, this can lead to deeply nested code that is hard to follow.
// 4. Avoiding inversion of control: Promises give control back to the developer, allowing them to decide when and how to handle the asynchronous operations. With callbacks, the control is inverted, and the callback function is called by the asynchronous operation, which can lead to unexpected behavior if not handled properly.
//Overall, promises provide a more structured and efficient way to handle asynchronous operations compared to callbacks, making them a preferred choice in modern JavaScript development.


//3)wrte code for 3 example of promises?
//ans:
//Example 1: A simple promise that resolves after a delay
const promise1 = new Promise((resolve) => {
    setTimeout(() => {  
        resolve("Promise 1 resolved after 2 seconds");
    }, 2000);
});
promise1.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Error:", error);
});
//Example 2: A promise that rejects after a delay
const promise2 = new Promise((_, reject) => {   
    setTimeout(() => {  
        reject("Promise 2 rejected after 3 seconds");
    }, 3000);
});
promise2.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Error:", error);
}); 
//Example 3: A promise that resolves with data from an API
const promise3 = fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then((data) => {
    console.log("Promise 3 resolved with data:", data);
}).catch((error) => {
    console.error("Error fetching data:", error);
});



//4)4 examples of promises with async and await use?
//Example 1: Fetching data from an API using async/await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
//Example 2: Creating a promise that resolves after a delay
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}   
async function delayedMessage() {
    await delay(2000);
    console.log("This message is displayed after a 2-second delay.");
}   
delayedMessage();
//Example 3: Handling multiple promises with async/await
async function fetchMultipleData() {    
    try {
        const [userResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ]);
        const userData = await userResponse.json();
        const postData = await postResponse.json();
        console.log("User Data:", userData);
        console.log("Post Data:", postData);
    } catch (error) {
        console.error("Error fetching data:", error);   
    }
}   
//5)fetch post show only first 5 records?
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => {
    const firstFivePosts = data.slice(0, 5); // Get the first 5 records
    console.log(firstFivePosts);
}
).catch((error) => {
    console.error("Error fetching data:", error);
});

//6)ceate fake promises manually that resolve after 3sec and rejecy t after 3sec?
//Creating a fake promise that resolves after 3 seconds
function fakePromiseResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved after 3 seconds");
        }, 3000);
    });
}   
fakePromiseResolve().then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Error:", error);
});
//Creating a fake promise that rejects after 3 seconds
function fakePromiseReject() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Promise rejected after 3 seconds");
        }, 3000);
    });
}
fakePromiseReject().then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Error:", error);
}
);

//7)what is promises and its states?
// A promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states:
// 1. Pending: The initial state of a promise, where the asynchronous operation is still in progress and has not yet completed or failed.
// 2. Fulfilled: The state of a promise when the asynchronous operation has completed successfully, and the resulting value is available.
// 3. Rejected: The state of a promise when the asynchronous operation has failed, and an error or reason for the failure is available.


//8)diffrence betn promises and callbacks?
// Promises and callbacks are both used to handle asynchronous operations in JavaScript, but they have some key differences:
// 1. Syntax: Promises provide a cleaner and more readable syntax compared to callbacks, which can lead to callback hell and make the code difficult to understand.
// 2. Error handling: Promises allow for better error handling through the use of .catch() method, which can catch errors at any point in the promise chain. In contrast, callbacks require manual error handling at each level, which can be cumbersome and error-prone.
// 3. Chaining: Promises allow for chaining multiple asynchronous operations together, making it easier to manage complex workflows. With callbacks, this can lead to deeply nested code that is hard to follow.
// 4. Control flow: Promises give control back to the developer, allowing them to decide when and how to handle the asynchronous operations. With callbacks, the control is inverted, and the callback function is called by the asynchronous operation, which can lead to unexpected behavior if not handled properly.
// Overall, promises provide a more structured and efficient way to handle asynchronous operations compared to callbacks, making them a preferred choice in modern JavaScript development.



//9)what does fetch return?
// The fetch function returns a promise that resolves to the Response object representing the response to the request. The Response object contains information about the response, such as the status code, headers, and body of the response. You can use methods like .json(), .text(), or .blob() on the Response object to extract the data from the response in the desired format.


//10)why do we use response.json() ?
// We use response.json() to parse the response body as JSON. When we make a fetch request, the response is returned as a Response object, which contains the raw data from the server. To convert this raw data into a usable JavaScript object, we call the .json() method on the Response object. This method returns a promise that resolves to the parsed JSON data, allowing us to work with it in our code. Using response.json() is essential when we expect the server to return data in JSON format, as it allows us to easily access and manipulate the data in our application.



//11)diffrence then/catch    and async/await?
// The main difference between then/catch and async/await is in their syntax and how they handle asynchronous code:
// 1. Syntax: then/catch uses a chaining syntax where you attach .then() for handling successful resolutions and .catch() for handling errors. In contrast, async/await allows you to write asynchronous code in a more synchronous style, using the async keyword to declare an asynchronous function and the await keyword to pause execution until a promise is resolved.
// 2. Error handling: With then/catch, you handle errors by attaching a .catch() method to the promise chain. With async/await, you can use try/catch blocks to handle errors in a more straightforward way, similar to synchronous code.
// 3. Readability: async/await often leads to cleaner and more readable code, especially when dealing with multiple asynchronous operations, as it avoids the nesting and chaining that can occur with then/catch.
// Overall, both then/catch and async/await are valid ways to handle asynchronous code in JavaScript, and the choice between them often comes down to personal preference and the specific use case at hand.



//12)what is promise chaining?
// Promise chaining is a technique in JavaScript where you can chain multiple promises together to handle a sequence of asynchronous operations. Each promise in the chain can return a value or another promise, allowing you to create a series of operations that depend on the results of previous operations. This helps to avoid callback hell and makes the code more readable and maintainable. For example:
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then((user) => {
    console.log("User:", user);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
}   
).then((response) => response.json())
.then((posts) => {
    console.log("Posts:", posts);
}).catch((error) => {
    console.error("Error:", error);
}
);  
//In this example, we first fetch a user, then use the user's ID to fetch their posts. Each step returns a promise, allowing us to chain the operations together in a clear and concise manner.
// 13) Fetch User Display Names in HTML List
async function displayUserNames() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log('\n--- User Names ---');
        users.forEach(user => console.log(user.name));
    } catch (error) {
        console.error('Failed to fetch users:', error);
    }
}
displayUserNames();
