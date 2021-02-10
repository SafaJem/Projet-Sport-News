const express = require("express");
const router = express.Router();
//Require the Profile Schema
const Profile = require("../models/Profile");
//Require the User Schema
const User=require("../models/User")

const isAuth=require('../middlewares/isAuth')

// add new profile
// acces private
router.post("/addprofile/:_id", isAuth , async (req, res) => {
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