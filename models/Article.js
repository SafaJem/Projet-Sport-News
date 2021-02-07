mongoose = require("mongoose") ;
const articleSchema= new mongoose.Schema({
    idPerson:{
        type:String,
    },
   
    articleBody:{
        type:String,
        required:true
    },
    articleDateCreation: {
        type: Date,
        default: Date.now(),
      },
      specialty: {
        type: String,
       required : true
      }
      
    
    })
    module.exports=mongoose.model('articles',articleSchema)