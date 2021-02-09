const router = require("express").Router();
const User=require("../models/User")
//Require the Article Schema
const Article = require("../models/Article");
router.post("/articles/:_id",  async (req, res) => {
const{_id}=req.params;
  try {
    const user = await User.findById(_id).select("-password");
      const newArticle = {
      text: req.body.text,
      name: user.name,
      user: user.id,
    };
    const article = await new Article(newArticle).save();
    res.json(article); 
  } catch (error) {
      console.log(error)
    res.status(500).json("Server Error !");
  }
});
 module.exports=router;