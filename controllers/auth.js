const User = require('../models/User')
const passport = require('../lib/passportConfig')

//Require bcrypt
const bcrypt = require('bcrypt')


//---------------------------------API's----------------------------------------
//GET SIGNUP
exports.auth_signup_get = (req,res) =>{
    res.render('auth/signup')
}

//GET SIGNIN
exports.auth_signin_get = (req,res) =>{
    res.render('auth/signin')
}

//POST SIGNUP
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body)

    let hash = bcrypt.hashSync(req.body.password, 10)
    console.log(hash)

    user.password = hash

    user.save()
    .then(() => {
        res.redirect('/auth/signin')
    })
    .catch(err => {
        console.log(err)
        res.send('Something went wrong, please try again later! Salman says you\'re a numpty!')
    })
}



//POST SIGNIN
exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/signin'
})

