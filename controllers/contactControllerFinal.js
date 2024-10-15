const contactModel = require('../models/contactModel')

const contactDetails = async (req,res) => {
    const result = await contactModel.find({})
    console.log(result);
    res.send(JSON.stringify({
        status : "success",
        data : result
    }))
}

const getUser = async (req,res) => {
    const ipName = req.query.cname
    const result = await contactModel.find({cname : ipName})
    res.send(JSON.stringify({
        status : "success",
        data : result
    }))
}

const createUser = async (req,res) => {
    const data = req.body
    const newData = new contactModel(data) //for creating 
    const result = await newData.save() // it will save 
    console.log(result)
    if(result._id){
        res.send({
            status : 'Success',
            data : result
        })
    }
}

const putUser = async (req,res) =>{
    const data = req.body
    const result = await contactModel.updateOne({cname:data.cname},data)
    res.send({
        status:"success",
        data : result
    })
}

const patchUser=async (req,res)=>{
    const data=req.query
    console.log(data.caddress)
    const result=await contactsModel.updateMany({caddress:data.caddress},{cexp:"1 year"})
    console.log(result)
    res.send({
        status:"success",
        data:result
    })
    }

const deleteUser = async (req,res) => {
    const data = req.params
    const result = await contactModel.deleteOne({cname:data.username})
    res.send({
        status : "delete",
        data: result
    })
}

module.exports = {
    contactDetails,getUser,createUser,putUser,patchUser,deleteUser
}