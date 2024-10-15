const express = require('express')
const app = express()

const {simpleMw} = require("./utils/middleware")

app.use(simpleMw)

app.get("/user",(req,res,next) => {
    console.log("middleware is two")
    next()
},(req,res) => {
    console.log("/user is hit")
    res.send('user')
})

app.get("/todo",simpleMw,(req,res) => {
    console.log("/todo is hit")
    res.send('todo')
})

app.listen(3001,()=> console.log("Server started"))