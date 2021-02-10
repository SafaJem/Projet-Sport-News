const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User=require("../models/User")

// add new profile
router.post("/addprofile/:_id",  async (req, res) => {
    const {_id}=req.params;
      try {
        const user = await User.findById(_id).select("-password");
          const newProfile = {
          userName:req.body.userName,
          user: user.name
        };
        const profile = await new Profile(newProfile).save();
        res.json(profile); 
      } catch (error) {
          console.log(error)
        res.status(500).json("Server Error !");
      }
  });


  module.exports = router;