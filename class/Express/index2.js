// request response Handling via JS
//   -- HANDLING REQUEST AND RESPONSE --
// express application handles http request and response
// 
// request object contains information about client request 
// ex: url ,header , query params , query body , req object 

// EX:
const express = require('express')
const app = express()
const port = 3000

app.get('/user' , (req,res)  =>
{
    console.log(req.query.name);
})

app.listen(port , () =>
{
    console.log(`app listening on port http://localhost:${port}`);
})

// when we hit http://localhost:3000/user?name=John
// output will be John in console