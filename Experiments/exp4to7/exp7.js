const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('Middleware executed at', new Date());
    next();
});

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
]

app.get('/user', (req, res) => {
    res.json(users)
})

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find(u => u.id === userId)
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});