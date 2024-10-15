const {credentialModel} = require('../models/credentialModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (req,res) => {
    const data = req.body
    const hashedPassword = await bcrypt.hash(data.password,8)//need to check this number 8
    const user = new credentialModel({
        username : data.username,
        password : hashedPassword
    })
    const result = await user.save()
    res.send({
        status : "created user",
        data : result
    })
}

const signIn = async (req,res) => {
    const data = req.body
    const finduser = await credentialModel.findOne({username:data.username},{password : 1})
    console.log(finduser)
    const isUser = await bcrypt.compare(data.password, finduser.password)
    console.log(isUser)
    if(isUser){
        const token = await jwt.sign(data.username,"jamesbond")
        console.log(token)
        res.send({
            status : "Loggedin succesfully",
            token : token
        })
    }
    else{
        res.status(401).send({
            status: "credentials is not Matching"
        })
    }
}

const protectedRoute = async (req,res) => {
    const data = req.params
    const result = await credentialModel.deleteOne({username : data.username})
    res.send("dummy")
}

module.exports = {
    signUp, signIn, protectedRoute
}