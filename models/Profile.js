// require mongoose
const mongoose=require('mongoose')

// Create the profile  schema
const profileSchema= new mongoose.Schema({
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
Role:{
    type:String
}

})
module.exports=mongoose.model('profile s',profileSchema)