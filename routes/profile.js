const express = require("express");
const router = express.Router();
//Require the Profile Schema
const Profile = require("../models/Profile");
//Require the User Schema
const User=require("../models/User")
const imgModel=require("../models/Image")

const isAuth=require('../middlewares/isAuth')




// get current profile 
// acces private
router.get("/me",async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'lastName']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// get all profiles 
router.get("/", isAuth,async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'lastName']);
    res.json(profiles);
  } catch (err) {
    console.error(err.profileFields);
    res.status(500).send('Server Error');
  }
});

 // add new profile

 router.post("/:index", async (req, res) => {
  const {index}=req.params
  const {userName}= req.body
    try {
      let profil = await Profile.findOne({ user: req.user.id });
      let profilName = await Profile.findOne(  {userName} );
      if (profil) {
        return res.status(400).json({ msg: 'you have already a profil' });
      }
      if (profilName) {
        return res.status(400).json({ msg: 'userName exisits' });
      }
      const user = await User.findById(req.user._id).select("-password");
      const image = await imgModel.findById(index);
   
        const newProfile = {  
        userName,
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