const express = require("express");
const router = express.Router();
//Require the Profile Schema
const Profile = require("../models/Profile");
//Require the User Schema
const User=require("../models/User")
//require image scheme
const imgModel=require("../models/Image")

const {isAuth,isAdmin}=require('../middlewares/isAuth')



// get one profile 
router.get("/one/:_id", isAuth,async (req, res) => {
  const { _id } = req.params;
  const userId =req.user._id
  
  try {
    const profileuUser = await Profile.findOne({user: userId} );
    if (profileuUser._id!=_id){

       return res.status(400).json({ msg: 'u dont have acces to view this profile' });

    }    const profile = await Profile.findById({_id});
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
router.put("/edit/:_id", isAuth ,isAdmin,async (req, res) => {
  const { _id } = req.params;
  const userId =req.user._id
  try {
    const profileuUser = await Profile.findOne({user: userId} );
    if (profileuUser._id!=_id){

       return res.status(400).json({ msg: 'u dont have acces to edit this profile' });

    }

    const profile = await Profile.findOneAndUpdate({ _id }, { $set: req.body }, {new:true});
    res.json({ msg: `profile edited `, profile });
  } catch (error) {
    console.log(error);
  }
});


  // delete a profile 
  router.delete("/delete/:id", isAuth,isAdmin,async (req, res) => {
    const { id } = req.params;
    const userId =req.user._id
    try {
      const profileuUser = await Profile.findOne({user: userId} );
      if (profileuUser._id!=id){

         return res.status(400).json({ msg: 'u dont have acces to delete this profile' });
 
      }
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
  const _id=req.user._id
    try {
      let profil = await Profile.findOne( {user :_id } );
      let profilName = await Profile.findOne(  {userName} );
      if (profil) {
        return res.status(400).json({ msg: 'you have already a profil' });
      }
      if (profilName) {
        return res.status(400).json({ msg: 'userName exisits' });
      }
      const user = await User.findById(_id).select("-password");
      console.log(user)
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