// require mongoose
const mongoose=require('mongoose')
// Create the profile  schema
const Schema = mongoose.Schema;

const profileSchema= new mongoose.Schema({
image: { type: Schema.Types.ObjectId, ref: "Image" },

user: { type: Schema.Types.ObjectId, ref: "users" },
userName:{
    type:String,
    required:true,
    unique : true
},

image:{
    data: Buffer,
    contentType: String
},
name :{type:String}
})
module.exports=mongoose.model('profiles',profileSchema)