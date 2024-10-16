const express = require('express')
const router = express.Router()

const {signUp} = require('../controllers/practiceController')

router.post('/v1/signUp',signUp)

module.exports = router