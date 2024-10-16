const express = require('express')
const app = express()
app.use(express.json())

require('dotenv').config()

const cors = require('cors')
app.use(cors({origin : "http://localhost:3000",credentials:true}))

const cre = require('./routers/credentialRoute')
app.use(cre)

app.listen(process.env.DEV_PORT, () => console.log("Sever started"))