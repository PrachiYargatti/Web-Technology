const express = require('express');
const app = express();

// 1. APPLICATION-LEVEL MIDDLEWARE (Runs for every request)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next handler
});

// 2. CUSTOM MIDDLEWARE (Example: Simple Auth Check)
const checkAuth = (req, res, next) => {
    const isAdmin = req.query.admin === 'true'; // Accessing query param for check
    if (isAdmin) {
        next(); // Authorized
    } else {
        res.status(403).send('Access Denied: You are not an admin!');
    }
};

app.get('/', (req, res) => {
    res.send('Welcome to the Public Home Page');
});

// Using custom middleware for a specific route
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to the Admin Dashboard!');
});

// 3. ERROR-HANDLING MIDDLEWARE (Always at the end)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(3001, () => {
    console.log('Middleware Demo running at http://localhost:3001');
});
