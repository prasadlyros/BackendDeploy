const express = require('express')
const router = express.Router()

const {contactDetails,createUser,getUser,deleteUser} = require('../controllers/contactControllerFinal')

router.get("/v1/contactDetails",contactDetails)
router.post('/v1/contactDetails',createUser)
router.get("/v1/contactDetails",getUser)
router.delete('/v1/contactDetails/:username',deleteUser)

module.exports = router 