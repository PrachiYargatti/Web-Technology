const express = require('express')
const app = express()
const port = 3000

// const funName = (req, res, next) => {
//     console.log(req.url)
//     next()
// }
// app.use(funName) //calling

app.use((req,res,next) => {
    console.log('middleware executed', new Date())
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('welcome to the about page!')
})

app.get('/contact', (req, res) => {
  res.send('welcome to the contact page!')
})

app.get('/project', (req, res) => {
  res.send('welcome to the project page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})