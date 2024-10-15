const express = require('express')
const app = express()
const data = require("./data/user")
// app.get("/login", (req,res) => {
    // res.writeHead(201, {"content-type" : "text/plain"})
    // res.write("hello from server")
    // res.end("end")
    // res.status(201)
    // res.statusCode = 201
    // res.set({
    //     "content-type":"text/plain",
    //      "token":"nxjdhuyd"
    // })
    // res.status(201).send("hello from server")
    // console.log("/login is hit")
// })

    app.get("/users",(req,res) => {
        const query = req.query
        console.log(query)
        if(query.username){
            const result=data.filter((item)=>item.username===query.username)
            res.status(200).send(JSON.stringify(result))
        }
        else{
            res.status(200).send(JSON.stringify(data))
        }
    })

app.listen(3004,() => console.log('server is started'))