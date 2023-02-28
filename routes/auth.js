const express = require('express')
const router = express.Router()
const authCntrl = require('../controllers/auth')

//SIGNUP
router.get('/auth/signup', authCntrl.auth_signup_get)
router.post('/auth/signup', authCntrl.auth_signup_post)

// SIGNIN
router.get('/auth/signin', authCntrl.auth_signin_get)
router.post('/auth/signin', authCntrl.auth_signin_post)

module.exports = router