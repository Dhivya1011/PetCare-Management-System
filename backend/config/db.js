const mongoose=require('mongoose')
const ConnectDb=()=>{
    mongoose.connect(process.env.DB_URL)
    mongoose.connection.on('connected',()=>{
       console.log("mongodb connectedb sucessfully"); 
    })
}
module.exports=ConnectDb
