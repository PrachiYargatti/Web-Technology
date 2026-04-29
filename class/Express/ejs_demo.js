const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes'); // Import Router

const app = express();

// 1. SETTING UP TEMPLATE ENGINE (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. SERVING STATIC FILES
// Anything in 'public' folder can be accessed directly (e.g., /css/style.css)
app.use(express.static(path.join(__dirname, 'public')));

// 3. USING EXPRESS ROUTER
app.use('/users', userRoutes);

// Home route rendering EJS
app.get('/', (req, res) => {
    const data = {
        time: new Date().toLocaleTimeString(),
        items: ['Express', 'Middleware', 'Router', 'EJS', 'Static Files']
    };
    // Render index.ejs with data
    res.render('index', data);
});

app.listen(3003, () => {
    console.log('EJS & Workflow Demo running at http://localhost:3003');
    console.log('Static CSS accessible at http://localhost:3003/css/style.css');
    console.log('Router routes accessible at http://localhost:3003/users');
});
