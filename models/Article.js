const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  text: { type: String, require: true },
  name: { type: String },
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      name: { type: String },
      index:{ type: Number},
      commentaire: { type: String, required: true },
      date: { type: Date, default: Date.now() },
    },
  ],
  date: { type: Date, default: Date.now() },
});
module.exports = Article = mongoose.model("articles", ArticleSchema);