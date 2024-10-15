const simpleMw = (req,res,next) => {
    console.log("middleware is one")
    next()
} 

const authorize = (req,res,next) => {
    console.log("authorize")
    console.log(req.body)
}

module.exports = {
    simpleMw,authorize
}