const express = require('express')
const app = express()
const port = 3000

  app.use((req,res,next) => {
            console.log("middleware function",new Date());
            next();
        });

        app.get('/' ,(req,res) => 
        {
            res.send('Hello World!')
        });

        app.listen(port , () => 
        {
            console.log(`app listening on port http://localhost:${port}`);
        });
// ACTIVITY:-
        // what is middleware fuctions ,why we use , company level use , real time examples ,types of middleware.
//ans:
//Middleware functions are functions that have access to the request and response objects in an Express application. 
// They can perform various tasks such as modifying the request or response, handling authentication, logging, and more. 
// Middleware functions are used to add functionality to an Express application and can be used at the company level to handle common tasks across multiple routes.
//  Real-time examples of middleware include authentication middleware that checks if a user is logged in before allowing access to certain routes,
//  logging middleware that logs incoming requests for debugging purposes, and error-handling middleware that catches and handles errors in the application.
//  Types of middleware include application-level middleware, router-level middleware, error-handling middleware, and built-in middleware provided by Express.

        // 2,3 examples of middleware function
//ans:
//Example 1: A simple logging middleware that logs the request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// Example 2: An authentication middleware that checks if a user is logged in before allowing access to certain routes
function isAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}
app.get('/protected', isAuthenticated, (req, res) => {
    res.send("This is a protected route");
});
// Example 3: An error-handling middleware that catches and handles errors in the application
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});


        