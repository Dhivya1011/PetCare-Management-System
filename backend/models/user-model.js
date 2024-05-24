const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },   
    password:{
        type:String,
        required:true
    },
    activationCode:{
        type:String,
        default:null
    }
})
const UserModel=mongoose.model('user',userSchema)
module.exports=UserModel