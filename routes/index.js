const express = require('express')

const router = express.Router()

const indexCntrl = require("../controllers/index")


//Calling API's aka function
router.get("/", indexCntrl.index_get)


//Export
module.exports = router