const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies (needed for POST/PUT)
app.use(express.json());

// 1. GET Method: Retrieve data
app.get('/api/users', (req, res) => {
    // Using JS in routes: Creating an array of users
    const users = [
        { id: 1, name: 'Aayan', role: 'Developer' },
        { id: 2, name: 'Mujawar', role: 'Designer' }
    ];
    res.status(200).json(users);
});

// 2. POST Method: Create new data
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // JS logic: Simple validation
    if (!newUser.name) {
        return res.status(400).send('Name is required');
    }
    console.log('User created:', newUser);
    res.status(201).send(`User ${newUser.name} created successfully!`);
});

// 3. PUT Method: Update/Replace data
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    // JS logic: Template literals and console logs
    console.log(`Updating user with ID: ${userId}`);
    res.status(200).send(`User ${userId} updated with ${JSON.stringify(updatedData)}`);
});

// 4. DELETE Method: Remove data
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).send(`User with ID ${userId} has been deleted.`);
});

app.listen(PORT, () => {
    console.log(`Basics Demo running at http://localhost:${PORT}`);
});
