const data = require("../data/user")

const contactDetails = (req,res) => {
    console.log("end point")
    res.status(200).json({
        status : "success",
        data : {
            contacts : data,
            length : data.length
        }
    })
}

const user = (req,res) => {
    console.log("query data",req.query)
    console.log("params",req.params)
    const params = req.params
    let result 
    if(params.city){
        result = data.filter(item => item.username === params.username && item.address.city === params.city)
    }   
    else{
        result = data.filter(item => item.username === params.username)
    }
    if(result.length > 0){
        res.status(200).json({
            status : "Success",
            data : {
                contact : result,
                length : data.length
            }
        })
    }
    else{
        res.status(404).send("user not found")
    }
}

const putContact = (req,res) => {
    const newData = req.body
    data[newData.id-1] = newData
    console.log(data)
}

const patchContact = (req,res) => {
    const newData = req.body
    res.send("dummy") 
}

const deleteContact = (req,res) => {
    console.log("delete")
    const params = req.params
    let result = data.filter((item) => item.id!=params.id)
    data = result
    console.log(data)
    res.status(200).json({
        status : "Succesfully deleted the contact"
    })
}

module.exports = {
    contactDetails,user,putContact,patchContact,deleteContact
}