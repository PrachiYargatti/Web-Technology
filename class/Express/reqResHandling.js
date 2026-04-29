const express = require('express')
const app = express()
const port = 3000

// handling req and res : -
// express application handles http req and res
// req object contains info about client request 
// ex: url, query parameters, req body, headers, etc
// http://localhost:3000/user?name=abc&age=20

//res object send response back to client
//common res methods: 
// res.send() => send text, res.json(), res.status() => send http status, res.sendfiles(), etc

// app.get('/', (req,res) => {
//     console.log(req.query.name)
// })

app.get('/', (req, res) => {
    const timer = new Date()
    res.json({
        mess: 'Hello',
        currentTime: timer
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})