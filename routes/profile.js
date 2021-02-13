const express = require("express");
const router = express.Router();
//Require the Profile Schema
const Profile = require("../models/Profile");
//Require the User Schema
const User=require("../models/User")
const imgModel=require("../models/Image")

const isAuth=require('../middlewares/isAuth')




// get one profile 
router.get("/one/:_id", isAuth,async (req, res) => {
  const { _id } = req.params;
  try {
    const profile = await Profile.findById({_id});
    res.json({ msg: 'profile ', profile });

  } catch (error) {
    console.log(error);
  }
});




// get all profiles 
router.get("/", isAuth,async (req, res) => {
  try {
    const profile = await Profile.find();
    res.json({ msg: `profiles`, profile });
  } catch (error) {
    console.log(error);
  }
});
// edit a profile 
router.put("/edit/:_id", isAuth ,async (req, res) => {
  const { _id } = req.params;
  try {
    const profile = await Profile.findOneAndUpdate({ _id }, { $set: req.body }, {new:true});
    res.json({ msg: `profile edited `, profile });
  } catch (error) {
    console.log(error);
  }
});


  // delete a profile 
  router.delete("/delete/:id", isAuth,async (req, res) => {
    const { id } = req.params;
    try {
      const profile = await Profile.findOneAndDelete({  id });
      res.json({ msg: "profile deleted", profile });
    } catch (error) {
      console.log(error);
    }
  });
  
  
 // add new profile

router.post("/addprofile/:index", isAuth, async (req, res) => {
  const {index}=req.params
  const {userName}= req.body
    try {
      
      const user = await User.findById(req.user._id).select("-password");
      const image = await imgModel.findById(index);
   
        const newProfile = {
          
        userName,
        name: user.name,
        user: user.id,
       image: image.img
      };

      const profile = await new Profile(newProfile).save();
      res.json(profile); 
    } catch (error) {
        console.log(error)
      res.status(500).json("Server Error !");
    }
  });

  module.exports = router;