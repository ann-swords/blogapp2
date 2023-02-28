//API's (the functions, we use .exports instead of exporting all functions, to export it immeditly)

exports.index_get = (req, res) =>{
    // res.send('Welcome to Blog App LOL')
    res.render('home/index')
}