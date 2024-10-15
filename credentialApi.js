const express = require('express')
const app = express()
app.use(express.json())

require('dotenv').config()

const cre = require('./routers/credentialRoute')
app.use(cre)

app.listen(process.env.DEV_PORT, () => console.log("Sever started"))