const mongoose = require('mongoose')
const url = "mongodb+srv://prasad:prasad221999@cluster0.jx4d7.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url).then((res) => console.log("Connected successfully")).catch((err) => console.log(err))

const practiceSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true,"enter username is a required field"]
       }
})
const practiceModel = mongoose.model("practiceCollection",practiceSchema)

module.exports = {
    practiceModel
}