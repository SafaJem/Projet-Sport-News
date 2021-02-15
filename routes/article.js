const router = require("express").Router();
//Require the User Schema
const User=require("../models/User")

//Require the Article Schema

const Article = require("../models/Article");
// Require Authentification middlewares
const Image =require('../models/Image')
const {isAuth,isJournalist }=require('../middlewares/isAuth')

// Add article
// acces private
router.post("/articles", isAuth ,isJournalist, async (req, res) => {
const{_id}=req.user._id;
const {text} =req.body;
const {image} =req.body
try {
    const user = await User.findById(_id).select("-password");
      const newArticle = {
      text,
      name: user.name,
      user: user.id,
      image
      , 
      date : Date.now()

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
router.get("/",async (req, res) => {
  try {
    const articles = await Article.find();
    res.json({ msg: "All articles", articles });
  } catch (error) {
    console.log(error);
  }
});
// get article by type 
// public acces 
router.get("/article/type",async (req, res) => {
  const {type}=req.body
  try {
    const article = await Article.findOne(type);
    res.json({ msg: "article", article });
  } catch (error) {
    console.log(error);
  }
});
// get article by user 
// public acces 
router.get("/article/user",async (req, res) => {
  const {user}=req.body
  try {
    const article = await Article.findOne({name : user});
    res.json({ msg: "article", article });
  } catch (error) {
    console.log(error);
  }
});

// Get one article
// acces public
router.get("/oneArticle/:id",async (req, res) => {
  const {_id}=req.params
  try {
    const article = await Article.findOne(_id);
    res.json({ msg: "article", article });
  } catch (error) {
    console.log(error);
  }
});

// Edit article
// acces private
router.put("/edit/:_id", isAuth ,async (req, res) => {
  const { _id } = req.params;
  const userId =req.user._id
  try {
    const articleuUser = await Article.findOne({user: userId} );
    if (articleuUser._id!=_id){

       return res.status(400).json({ msg: 'u dont have acces to edit this article' });

    }
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
  const userId =req.user._id
  try {
    const articleuUser = await Article.findOne({user: userId} );
    if (articleuUser._id!=id){

       return res.status(400).json({ msg: 'u dont have acces to delte this article' });

    }    const article = await Article.findOneAndDelete({ _id: id });
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
    const article = await Article.findOneAndUpdate(index,{ 
      $push:{comments:{commentaire:req.body.commentaire,user : req.user._id,name:req.user.name}}
    });
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

// Reclamer article
// acces private
router.put("/reclamation/:_id/", isAuth, async (req, res) => {
  const { _id } = req.params;
  const {index}=req.user._id
    try {

      const user = await User.findById(index) 
    const article = await Article.findOneAndUpdate({_id},{ 

      $push:{reclamArticles:{reclamation:req.body.reclamation,name : user.name},}
    },{new:true});
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

//Delete comment
// acces private
router.put("/deletecomment/:_id/:index", isAuth, async (req, res) => {
  const { _id } = req.params;
  const {userId}=req.user._id;

  const {index} =req.params;
  try {

    const article = await Article.updateOne({_id}, 
    { $pull: { "comments" : { _id: index ,user : userId} } }, { multi: true })
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }//{ $pull: { results: { score: 8 , item: "B" } } }
});



//edit a comment 
// private acces
router.put("/editcomment/:_id/:index",isAuth,  async (req, res) => {
  const { _id } = req.params;
  const {index}=req.params;
  const {userId}=req.user._id;
  const {commentaire}=req.body
  try {
    const article = await Article.updateOne({_id , "comments._id" : index,"comments.user" : userId},
    {$set : {"comments.$.commentaire":commentaire}})

    
   
    res.json(article);
  }
  catch (error) { res.status(500).send("Server Error !"); }
});

 module.exports=router;