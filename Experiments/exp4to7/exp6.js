const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('Middleware executed at', new Date());
    next();
});
app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});