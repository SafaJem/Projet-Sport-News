const {body,validationResult}=require('express-validator')

const registerRules=()=>[
body('name','Name is required').notEmpty(),
body('lastName','Last Name is required').notEmpty(),
body('email','Email is required').isEmail(),
body('password','Password must contain 6 characters').isLength(
    {
     min:6,
     max:20
    }
)
]

const loginRules=()=>[
    body('email','Email is required').isEmail(),
    body('password','Password must contain 6 characters').isLength(
        {
         min:6,
         max:20
        }
    ) 
]
const articleRules =()=>{
    body('text','article must contain at least 20 characters').isLength({min:20})
}
const commentRules =()=>{
    body('commentaire','article must contain at least 1 characters').notEmpty()
}

const validator=(req,res,next)=>{
const errors= validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).send({errors:errors.array().map((el)=>( {msg :el.msg ,}))})
}
 next();

}

module.exports = {validator,registerRules,articleRules,loginRules,commentRules}