const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  image: { type:String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String}, 
  text: { type: String, require: true }, 
  type: { type: String, require: true },
  name: { type: String },

 
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      name: { type: String },
      commentaire: { type: String, required: true },
      date: { type: Date, default: Date.now() },
    },
  ],
  reclamArticles: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      name: { type: String },
      reclamation: { type: String, required: true },
      date: { type: Date, default: Date.now() },
    },
  ],
  date: { type: Date, default: Date.now() },
});
module.exports = Article = mongoose.model("articles", ArticleSchema);