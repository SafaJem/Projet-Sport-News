// require mongoose
const mongoose=require('mongoose')

// Create the comment schema
const commentSchema= new mongoose.Schema({
idPerson:{
    type:String,
},
idArticle:{
    type:String,
},
commentaire:{
    type:String,
    required:true
},
dateCreation: {
    type: Date,
    default: Date.now(),
  }

})
module.exports=mongoose.model('comments',commentSchema)