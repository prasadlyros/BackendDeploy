const express = require('express')
const router = express.Router()

const {todoDetails,getTodo,createTodo} = require('../controllers/todoControllerWithEx')

router.get("/v1/todoDetails",todoDetails)
router.get("/v1//todoDetails",getTodo)
router.post("/v1/todoDetails",createTodo)

module.exports = router 