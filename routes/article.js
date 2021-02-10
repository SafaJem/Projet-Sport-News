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

router.put("/newcomment/:_id",  async (req, res) => {
  const { _id } = req.params;
  try {
    const article = await Article.findOneAndUpdate({_id},{ 
      $push:{comments:{commentaire:req.body.commentaire,index:req.body.index}}
    });
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

router.put("/deletecomment/:_id/:index",  async (req, res) => {
  const { _id } = req.params;
  const {index} =req.body;
  try {
    const article = await Article.findOneAndUpdate({_id},{ 
      $pull:{comments:{index}}
    });
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

 module.exports=router;