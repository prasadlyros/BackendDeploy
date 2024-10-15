const express = require('express')
const app = express()
const {todos,todoDetails} = require('../controllers/todoController')

app.get("/todo",todos)
app.get("/todoDe",todoDetails)

app.listen(3000,()=> console.log("Server is started"))

