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
isAdmin :{
    type:Boolean
},
isJournalist :{
    type:Boolean
}

})
module.exports=mongoose.model('users',userSchema)