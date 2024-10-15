const express = require('express')
const app = express()

const {authorize} = require('./utils/middleware')

app.use(express.json)
app.use(authorize)

app.post("/login",(req,res) => {
    res.send('post request')
})

app.listen(3001, () => console.log("server is started"))