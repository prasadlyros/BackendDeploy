const express = require('express')
const { signUp,Signin} = require('../controllers/credentialController')
const router = express.Router()

router.post('/v1/SignIn',Signin)
router.post('/v1/signup',signUp)

module.exports = router