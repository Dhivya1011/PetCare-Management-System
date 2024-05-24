const express=require('express')
const{signup,signin}=require('../controllers/auth.controller')
const bodyParser=require('body-parser')
const router=express.Router()
router.use(bodyParser.json())
router.post('/signup',signup)

router.post('/signin',signin)
module.exports=router




