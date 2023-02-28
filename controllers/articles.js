// CURD API's --> Functions

//Model
const Article = require('../models/Article')
const Author = require('../models/Author')

//HTTP GET - LOAD Article Form
exports.article_create_get = (req,res) =>{
    Author.find()
    .then((authors) =>{
        res.render("article/add", {authors})

    })
    .catch(err =>{
        console.log(err)
    })
}

//HTTP Post - to post the data
exports.article_create_post = (req,res) =>{
    console.log(req.body)
    let article = new Article(req.body)

    //Save Article in the database:
    article.save()
    //Javascript Promise
    //If the promise is fullfiled .then() will run
    .then( ()=>{
        res.redirect("/article/index")
    })
    .catch((err)=>{
        console.log(err)
        res.send("Please try again later")
    })
}


exports.article_index_get = (req,res) =>{
    Article.find().populate('author') //mongoose method
    .then(articles =>{ //articles --> catching the data from the databse and the variable will catch it.
        res.render("article/index", {articles: articles}) // or if it's the same, 
    })
    .catch(err=>{
        console.log(err)
    })
}


// HTTP GET - Article By ID
exports.article_show_get = (req, res )=> {
    Article.findById(req.query.id).populate('author')
    .then(article => {
        res.render("article/detail", {article});
    })
    .catch(err => {
        console.log(err);
    })
}


//HTTP DELETE - Article
exports.article_delete_get = (req, res) =>{
    Article.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect("/article/index")
    })
    .catch(err =>{
        console.log(err)
    })
}



//HTTP EDIT-MADE BY ME ANN
exports.article_edit_get = (req,res) =>{
    Article.findByIdAndUpdate(req.query.id)
    .then((article)=>{
        res.render("article/edit", {article})
    })
    .catch(err =>{
        console.log(err)
        res.send('Something went wrong Luv!')
    })
}


exports.article_edit_post = (req,res) =>{
    Article.findByIdAndUpdate(req.query.id,
        {title: req.body.title,
        content: req.body.content,
        isPublisehd: req.body.isPublisehd,
        totalWords: req.body.totalWords}
     )

    .then( ()=>{
        res.redirect("/article/index")
    })
    .catch((err)=>{
        console.log(err)
        res.send("Please try again later")
    })
}
