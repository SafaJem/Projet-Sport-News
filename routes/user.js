// Require router from express
const router = require('express').Router();

// Require the User Schema
const User=require('../models/User')

// Require bcrypt
const bcrypt=require('bcrypt')

// Require the json web token
const jwt=require('jsonwebtoken')

// Require validator middlewares
const {validator,registerRules,loginRules}=require('../middlewares/validator')

// Require Authentification middlewares
const isAuth=require('../middlewares/isAuth')

// get user
router.get("/",async (req, res) => {
   try{ const user= await User.find()
    res.json(user);}
    catch(err){
        res.send(err)
    }
     });

// Register new user
 router.post('/register',registerRules(),validator, async (req, res) => {
    const { name, lastName, email, password,Role} = req.body;
    try {
      // Check for existing user
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      // Create new User
      user = new User({ name, lastName, email, password, Role });
   // Create Salt & hash
   const salt=10;
   const hashedPassword=await bcrypt.hash(password,salt);
   user.password=hashedPassword;
// Save the user
await user.save()

// sing user
const payload={
    id:user._id
}

const token = await jwt.sign(payload,process.env.secretKey,{expiresIn:'7 days',})

res.status(200).send({msg:'User registred with success',user,token})
}
catch(err){
res.status(500).send({msg:'Server Error'})
}
})  

// Login user
router.post('/login',loginRules(),validator, async (req, res) => {
const {email,password}=req.body;
try{
// Check for existing user
let user=await User.findOne({email})
if(!user){
 return res.status(400).json({msg:"Bad Credentials! email"})
}
//Check password
 const isMatch= await bcrypt.compare(password,user.password)
if(!isMatch){
 return res.status(400).json({msg:"Bad Credentials! password"}) 
}
// sing user
const payload={
    id:user._id
}

const token = await jwt.sign(payload,process.env.secretKey,{expiresIn:'7 days',});

res.send({msg:'Logged in with success',user,token})
}

catch(err){
    res.status(500).send({msg:'Server Error'})
}
})

// Get authentified user
router.get('/user',isAuth,(req,res)=>{
    res.send({user:req.user})
})

// edit user
router.put("/edit/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const user = await User.findOneAndUpdate({ _id }, { $set: req.body }, {new:true});
      res.json({ msg: "user edited", user });
    } catch (error) {
      console.log(error);
    }
  });

  // delete user
  router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOneAndDelete({ _id: id });
      res.json({ msg: "contact deleted", user });
    } catch (error) {
      console.log(error);
    }
  });



module.exports = router;