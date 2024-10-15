const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())

const todoRouter = require('./routers/todoRouter')
app.use(todoRouter)

app.listen(3001,()=>console.log("server has started"))