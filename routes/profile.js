const express = require("express");
const router = express.Router();
//Require the Profile Schema
const Profile = require("../models/Profile");
//Require the User Schema
const User=require("../models/User")
//require image scheme

const {isAuth,isAdmin}=require('../middlewares/isAuth')


// get current profile 
// acces private
router.get("/me",isAuth,async (req, res) => {
  
    try{
        const profile=await Profile.findById(req.user._id)
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// get all profiles 
router.get("/",async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'lastName']);
    res.json(profiles);
  } catch (err) {
    console.error(err.profileFields);
    res.status(500).send('Server Error');
  }
});

 // add new profile

 router.post("/",isAuth, async (req, res) => {
  const {userName}= req.body
    try {
      const user = await User.findById(req.user._id).select("-password");
      const newProfile = {  
        userName,
        name:user.name
      };

      const profile = await new Profile(newProfile).save();
      res.json(profile); 
    } catch (error) {
        console.log(error)
      res.status(500).json("Server Error !");
    }
  });



// edit a profile 
router.put("/", isAuth ,async (req, res) => {
  const {userName}= req.body

  try {
    const profile = await Profile.findOneAndUpdate({ user:req.user._id }, { $set: req.body }, {new:true});
    res.json({ msg: `profile edited `, profile });
  } catch (error) {
    console.log(error);
  }
});


  // delete a profile 
  router.delete("/", isAuth,async (req, res) => {
    try {
     const profile = await Profile.findOneAndDelete({ user: req.user._id });
      res.json({ msg: "profile deleted", profile });
    } catch (error) {
      console.log(error);
    }
  });
  


  module.exports = router;