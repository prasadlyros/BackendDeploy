const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"
const client =  new MongoClient(url)

const express = require('express')
const app = express()
let database
let testCollection

app.use(express.json())

function main(){
    client.connect().then((res) => console.log("Connected to db")).catch((err) => console.log(err))
    database = client.db("fromexpress")
    testCollection = database.collection("testexpresscollection")
}
main()

app.post("/createData",(req,res) => {
    const data = testCollection.insertOne(req.body)
    console.log(data)
    res.send(data)
})

app.get("/getData",(req,res)=>{
    const data = testCollection.find()
    console.log(data)
    res.send(data)
})

app.get("/user/:username",async (req,res) => {
    const uname = req.params.username
    const updatename = req.params.updatename

    // const data = await testCollection.updateOne({username : uname},{$set:{username:updatename}})
    const data = await testCollection.find({username : uname}).toArray()

    if(data){
        res.send(data)
    }
    else{
        res.send('error')
    }
    // res.send(data)
})

app.listen(3001, () => console.log("Server Started"))