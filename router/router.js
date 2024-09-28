const express = require('express');
const router = express.Router();


const PostsController = require('../controller/PostsController')
const UsersController = require('../controller/UserController')
const ProductController = require('../controller/ProductController')

router.get('/' , (req,res)=>{res.status(200)})

router.get('/add-product' ,  ProductController.addProduct)
router.post('/login' , UsersController.LoginUser)
router.post('/Signup' , UsersController.SignUpUser)
router.get('/posts' ,  PostsController.GetAllPosts)


module.exports = router