// require mongoose
const mongoose=require('mongoose')

// Create the user schema
const userSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
email:{
    type:String ,
    required:true,
    unique:true 
},
password:{
    type:String,
    required:true
},
role :{
    type:String,
    default:"Client"
}
})
module.exports=mongoose.model('users',userSchema)