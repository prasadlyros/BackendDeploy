const mongoose = require('mongoose')
const validator = require('validator')
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.jx4d7.mongodb.net/${process.env.TEST_DB2}?retryWrites=true&w=majority&appName=Cluster0`
const connect = mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const credentialsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username it is require feild"]
    },
    password:{
        type:String,
        required  : true,
        validate:{
            validator : function(value){
                return validator.isAscii(value)
            },
            message:"password validation failed, it should alpha numeric"
        }
    },
    email:{
        type:String,
        required:true
    }
})

const credentialModel = mongoose.model("credentials",credentialsSchema)

module.exports = {
    credentialModel
}