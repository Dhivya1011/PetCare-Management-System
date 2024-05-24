const UserModel=require('../models/user-model')
exports.signup=async(req,res)=>{
    const user=new UserModel(req.body)
    await user.save()
    res.status(200).json({message:'Data stored'})
}
exports.signin=async(req,res)=>{
    const{email,password}=req.body
    let user=await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"Email not found"})
    }
    
    if(password===user.password){
        return res.status(200).json({message:"Login successful",
    user})
    }
    return res.status(400).json({message:"Incorrect password"})  
}