const router = require("express").Router();
//Require the User Schema
const User=require("../models/User")

//Require the Article Schema

const Article = require("../models/Article");
// Require Authentification middlewares
const Image =require('../models/Image')
const isAuth=require('../middlewares/isAuth')

// Add article
// acces private
router.post("/articles/:_id/:index", isAuth , async (req, res) => {
const{_id}=req.params;
const {index}=req.params;
const {text} =req.body;
  try {
    const image = await Image.findById(index);
    const user = await User.findById(_id).select("-password");
      const newArticle = {
      text,
      name: user.name,
      user: user.id,
      image: image.img

    };
    const article = await new Article(newArticle).save();
    res.json({ msg: "article added", article });
  } catch (error) {
      console.log(error)
    res.status(500).json("Server Error !");
  }
});

// Get articles
// acces public
router.get("/", isAuth,async (req, res) => {
  try {
    const articles = await Article.find();
    res.json({ msg: "All articles", articles });
  } catch (error) {
    console.log(error);
  }
});

// Edit article
// acces private
router.put("/edit/:_id", isAuth ,async (req, res) => {
  const { _id } = req.params;
  try {
    const article = await Article.findOneAndUpdate({ _id }, { $set: req.body }, {new:true});
    res.json({ msg: "article edited", article });
  } catch (error) {
    console.log(error);
  }
});

// Delete article
// acces private
router.delete("/delete/:id", isAuth,async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOneAndDelete({ _id: id });
    res.json({ msg: "article deleted", article });
  } catch (error) {
    console.log(error);
  }
});

// Comment an article
// acces private
router.put("/newcomment/:index", isAuth, async (req, res) => {
  const {index}=req.params
    try {
      const user = await User.findById(req.user._id) 
    const article = await Article.findOneAndUpdate(index,{ 
      $push:{comments:{commentaire:req.body.commentaire,name : user.name}}
    },{new:true});
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

// Reclamer article
// acces private
router.put("/reclamation/:_id/:index", isAuth, async (req, res) => {
  const { _id } = req.params;
  const {index}=req.params
    try {

      const user = await User.findById(index) 
    const article = await Article.findOneAndUpdate({_id},{ 

      $push:{reclamArticles:{reclamation:req.body.reclamation,name : user.name}}
    });
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

//Delete comment
// acces private
router.put("/deletecomment/:_id/:index", isAuth, async (req, res) => {
  const { _id } = req.params;
 
  const {index} =req.params;
  try {

    const article = await Article.updateOne({_id}, 
    { $pull: { "comments" : { _id: index } } }, { multi: true })
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }//{ $pull: { results: { score: 8 , item: "B" } } }
});



//edit a comment 
// private acces
router.put("/editcomment/:_id/:index",isAuth,  async (req, res) => {
  const { _id } = req.params;
  const {index}=req.params;
  const {commentaire}=req.body
  try {
    const article = await Article.updateOne({_id , "comments._id" : index},
    {$set : {"comments.$.commentaire":commentaire}})

    
   
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

 module.exports=router;