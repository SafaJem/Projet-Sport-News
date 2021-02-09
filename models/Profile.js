// require mongoose
const mongoose=require('mongoose')
// Create the profile  schema
const Schema = mongoose.Schema;

const profileSchema= new mongoose.Schema({
user: { type: Schema.Types.ObjectId, ref: "User" },
userName:{
    type:String,
    required:true
}

})
module.exports=mongoose.model('profiles',profileSchema)