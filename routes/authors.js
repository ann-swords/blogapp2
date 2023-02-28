const express = require('express')

const router = express.Router()

const authorCntrl = require('../controllers/authors')
const isLoggedIn = require('../lib/isLoggedIn')

router.get('/author/add', isLoggedIn, authorCntrl.author_create_get)
router.post('/author/add', authorCntrl.author_create_post)

router.get('/author/index', authorCntrl.author_index_get)

module.exports = router