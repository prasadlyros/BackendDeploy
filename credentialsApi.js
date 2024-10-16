const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())

const cors = require('cors')
app.use(cors({origin : "http://localhost:3000",credentials:true}))

const credentialRoute = require('./routes/credentialRoute')
app.use(credentialRoute)

app.listen(3001, () => console.log("Server started"))