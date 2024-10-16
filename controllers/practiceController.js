const {practiceModel} = require('../models/practiceModel') 
const bcrypt = require('bcrypt')

const signUp = async (req,res) => {
    const data = req.body
    const user = new practiceModel({
        username : data.username
    })

    const result = await user.save()
    res.send({
        status:"Created user",
        data : result
    })
}

module.exports = {
    signUp
}