const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    isPublisehd: Boolean,
    totalWords: Number,
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }]
},
{
    timestanps: true //means createdAt and updatedAt
})


//Model
const Article = mongoose.model("Article", articleSchema)


//Export
module.exports = Article