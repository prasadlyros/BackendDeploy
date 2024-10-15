const todo = require("../data/todo")

const todoDetails = (req,res) => {
    console.log("end point")
    res.status(200).json({
        status : "success",
        data : {
            todo : todo,
            // length : data.length
        }
    })
}

const todos = (req,res) => {
    const query = req.query
    console.log(query)
    // res.status(200).send(JSON.stringify(todo))
    if(query.completed && query.active){
        const result = todo.filter(item => item.completed === query.completed && item.active === query.active)
        res.status(200).send(JSON.stringify(result))
        console.log(result)
    }
    else{
        res.status(200).send(JSON.stringify(todo))
    }
    // if(query.title){
    //     const result = todo.find(item => item.title === query.title)
    //     res.status(200).send(JSON.stringify(result))
    // }
    // else{
    //     res.status(200).send(JSON.stringify(todo))
    // }
}

const todoParams = (req,res) => {
    console.log("query data", req.query)
    console.log("params data", req.params)
    const params = req.params
    let result
    if(params.completed){
        result = todo.filter(item => item.title === params.title && item.completed === params.completed)
    }
    else{
        result = todo.filter(item => item.title === params.title)
    }
    if(result.length > 0){
        res.status(200).json({
            status : "Success",
            data : {
                todo : result,
                length : todo.length
            }
        })
    }
    else{
        res.status(404).send("User not found")
        console.log(result.length)
    }
}

const putTodo = (req,res) => {
    const newData = req.body
    todo[newData.id-1] = newData
    console.log(todo)
}

const patchTodo = (req,res) => {
    const newData = req.body
    res.send("dummy") 
    console.log(newData)
}

const deleteTodo = (req,res) => {
    console.log("delete")
    const params = req.params
    let result = todo.filter((item) => item.id!=params.id)
    todo = result
    console.log(todo)
    res.status(200).json({
        status : "Succesfully deleted"
    })
}

module.exports = {todoDetails,todos,putTodo,patchTodo,deleteTodo,todoParams}
