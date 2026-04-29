const express = require('express');
const app = express();

// QUERY PARAMETERS DEMO
// Access them via req.query

app.get('/search', (req, res) => {
    // 1. Basic Query Param
    const searchTerm = req.query.q;
    
    // 2. Multiple Query Params (e.g., Filtering)
    const category = req.query.category;
    const priceLimit = req.query.maxPrice;

    // 3. Example Log Logic
    console.log(`Search: ${searchTerm}, Category: ${category}, Max Price: ${priceLimit}`);

    if (!searchTerm) {
        return res.send('Please provide a search term (?q=...)');
    }

    res.json({
        message: `Results for '${searchTerm}'`,
        filters: {
            category: category || 'All',
            maxPrice: priceLimit || 'No limit'
        },
        results: [
            { id: 101, item: `${searchTerm} Pro` },
            { id: 102, item: `${searchTerm} Lite` }
        ]
    });
});

// Example URL to test: http://localhost:3002/search?q=laptop&category=electronics&maxPrice=50000

app.listen(3002, () => {
    console.log('Query Parameters Demo running at http://localhost:3002');
});
