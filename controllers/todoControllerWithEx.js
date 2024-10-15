const todoModel = require('../models/todoModel')

const todoDetails = async (req,res) => {
    const result = await todoModel.find({})
    console.log(result);
    res.send(JSON.stringify({
        status : "success",
        data : result
    }))
}

const getTodo = async (req,res) => {
    const iptitle = req.query.title
    const result = await todoModel.find({title : iptitle})
    res.send(JSON.stringify({
        status : "success",
        data : result
    }))
}

const createTodo = async (req,res) => {
    const data = req.body
    const newData = new todoModel(data) //for creating 
    const result = await newData.save() // it will save 
    console.log(result)
    if(result._id){
        res.send({
            status : 'Success',
            data : result
        })
    }
}

module.exports = {
    todoDetails,getTodo,createTodo
}