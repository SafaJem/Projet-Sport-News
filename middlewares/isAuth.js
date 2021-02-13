// require Json web token
const jwt=require('jsonwebtoken')

// Require the user Schema
const User=require('../models/User')

const isAuth= async(req,res,next)=>{
try{
const token=req.headers['x-auth-token']
if(!token)
return res.status(401).send({msg:"No Token, authorization denied"})
const decoded= await jwt.verify(token,process.env.secretKey)
// Add User from payload
const user=await User.findById(decoded._id)
//Check for user
if(!user){
return res.status(401).send({msg:'Autorization deniet'})   
}

// Create user
req.user=user
next();
}
catch(err){
    res.status(400).send({msg:"Token is not valid"});
}

}

module.exports=isAuth








