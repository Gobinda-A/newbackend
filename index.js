require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("You are in the twitter page: @gobu1208")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login to newbackend application</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})