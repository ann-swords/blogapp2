const express = require('express')
const router = express.Router()

//Method override:
let methodOverride = require('method-override')
router.use(methodOverride('_method'));

//Body Parser
router.use(express.urlencoded({extended: true}))

const articleCntrl = require('../controllers/articles')


//Call API's (Functions)
router.get("/article/add", articleCntrl.article_create_get)
router.post("/article/add", articleCntrl.article_create_post)
router.get("/article/index", articleCntrl.article_index_get)

router.get("/article/detail", articleCntrl.article_show_get)
router.delete("/article/delete", articleCntrl.article_delete_get)
//UPDATE MADE BY ME:
router.get("/article/edit", articleCntrl.article_edit_get)
router.put("/article/edit", articleCntrl.article_edit_post)




module.exports = router