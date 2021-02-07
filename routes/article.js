const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// add new article
router.post("/add", async (req, res) => {
    const { idPerson,articleBody, specialty } = req.body;
    try {
      const newArticle = new Article({
        idPerson,
        articleBody,
        specialty
        
      });
      // save the article
      const article = await newArticle.save();
      res.json({ msg: "article added  ", article });
    } catch (error) {
      console.log(error);
    }
  });

  // get article
  router.get("/", async (req, res) => {
    try {
      const articles = await Article.find();
      res.json({ msg: "data fetched", articles });
    } catch (error) {
      console.log(error);
    }
  });

  // edit article
  router.put("/edit/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const article = await Article.findOneAndUpdate({ _id }, { $set: req.body },{new:true});
      res.json({ msg: "article edited", article });
    } catch (error) {
      console.log(error);
    }
  });

  // // delete article
  router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const article = await article.findOneAndDelete({ _id: id });
      res.json({ msg: "article deleted", article });
    } catch (error) {
      console.log(error);
    }
  });





  module.exports = router;