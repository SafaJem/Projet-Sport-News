const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// add new comment
router.post("/add", async (req, res) => {
    const { idPerson,idArticle, commentaire } = req.body;
    try {
      const newComment = new Comment({
        idPerson,
        commentaire,
        idArticle
        
      });
      // save the comment
      const comment = await newComment.save();
      res.json({ msg: "comment added", comment });
    } catch (error) {
      console.log(error);
    }
  });

  // get comment
  router.get("/", async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json({ msg: "data fetched", comments });
    } catch (error) {
      console.log(error);
    }
  });

  // edit comment
  router.put("/edit/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const comment = await Comment.findOneAndUpdate({ _id }, { $set: req.body },{new:true});
      res.json({ msg: "comment edited", comment });
    } catch (error) {
      console.log(error);
    }
  });

  // // delete comment
  router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const comment = await Comment.findOneAndDelete({ _id: id });
      res.json({ msg: "comment deleted", comment });
    } catch (error) {
      console.log(error);
    }
  });





  module.exports = router;