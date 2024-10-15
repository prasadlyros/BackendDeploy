const express = require('express')
const app = express()
const data = require('./data/user')

app.use(express.json())

const {contactDetails,user,putContact,patchContact,deleteContact} = require('./controllers/contactController')

//Get request
const getUser = (req,res) => {
    console.log(req.body)
    res.send("from post req")
}
app.get("/v1/contactDetails",contactDetails)
app.get("/v1/user/:username/:city?", user)

//POST
app.post("/v1/user",getUser)

//PUT
app.put("/v1/user/:username",putContact)

//PATCH
app.patch("v1/user",patchContact)

//Delete
app.delete("/v1/user/:id",deleteContact)

app.listen(3001, () => console.log("Server started"))