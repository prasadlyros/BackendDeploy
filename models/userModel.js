const mongoose = require('mongoose')
const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/intDB?retryWrites=true&w=majority&appName=Cluster0"
const connect = mongoose.connect(url).then((res) => console.log("Connected Succesfully")).catch((err) => console.log(err))

const credentialSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'enter username is a require feild']
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const credentialModel = mongoose.model("Credentials",credentialSchema)

module.exports = {
    credentialModel
}