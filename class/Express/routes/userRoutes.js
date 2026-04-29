const express = require('express');
const router = express.Router();

// Mock data
const users = ['Aayan', 'Mujawar', 'Deepmind', 'Antigravity'];

// Router handles specific paths
router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`User Details for: ${name}`);
});

module.exports = router;
