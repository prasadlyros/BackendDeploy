const mongoose = require('mongoose')
// const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/"need to enter db name of out choice"?retryWrites=true&w=majority&appName=Cluster0"
const url = "mongodb://localhost:27017/mongtest"
mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const todoModel = mongoose.model("todo",{
    title : {
        type : String,
        required: true,
        unique:true
    },
    desc : {
        type:String,
        required:true,
        unique:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }
})

module.exports = todoModel