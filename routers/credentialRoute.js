const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const {Signin,signUp} = require('../controllers/credentialController')

function authorize(req,res,next){
    const auth = req.headers.authorization
    const token = auth.replace("Bearer ", "")
    const valid = jwt.verify(token, "jamesbond")
    if(valid){
        next()
    }
    else{
        res.send({
            status : "failed",
            message: "you are not authorized"
        })
    }
}

router.post('/v1/signUp',signUp)
router.post('/v1/signIn',Signin)

module.exports = router