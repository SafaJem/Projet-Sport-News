const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User=require("../models/User")

// add new profile
/*router.post("/addprofile/:_id",  async (req, res) => {
    const {_id}=req.params;
    const {role}= req.body
      /*try {
        const user = await User.findById(_id).select("-password");
          const newProfile = {
          role,
          user
        };
        const profile = await new Profile(newProfile).save();
        res.json(profile); 
      } catch (error) {
          console.log(error)
        res.status(500).json("Server Error !");
      }
  });
*/
router.post("/addprofile/:_id",  async (req, res) => {
  const{_id}=req.params;
    try {
      const user = await User.findById(_id).select("-password");
        const newProfile = {
        text: req.body.text,
        userName: user.name,
        user: user.id,
      };
      const profile = await new Profile(newProfile).save();
      res.json(profile); 
    } catch (error) {
        console.log(error)
      res.status(500).json("Server Error !");
    }
  });

  module.exports = router;