const Author = require('../models/Author')

exports.author_create_get = (req, res) => {
    res.render('author/add')
}

exports.author_create_post = (req, res) => {
    console.log(req.body)
    let author = new Author(req.body)

    author.save()
    .then(()=>{
        res.redirect('/author/index')
    })
    .catch((err)=>{
        console.log(err)
        res.send('Something went wrong, Please try again later!')
    })
}

exports.author_index_get = (req, res) => {
    Author.find()
    .then(authors => {
        res.render('author/index', {authors})
    })
    .catch(err => {
        console.log(err)
    })
}