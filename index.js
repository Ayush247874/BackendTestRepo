require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000  //range 0–65535. //Only 65535 possible ports exist per IP address.

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Enter In Twiter');
})

app.get('/login',(req,res)=>{
    res.send('<h1> Page Login Just </h1>');
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Please Watch Youtube Video </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
