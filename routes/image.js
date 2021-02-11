const multer = require('multer');
 const  imgModel = require('../models/Image');
const router = require('express').Router();
const fd= require('fs')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const  upload = multer({ storage: storage });

router.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('index', { items: items });
        }
    });
});
/*router.post("/addprofile/:_id",  async (req, res) => {
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
  });*/

router.post('/', upload.single('image'), (req, res, next) => {
 
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});
 
router.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const image = await imgModel.findOneAndUpdate({ _id }, { $set: req.body },{new:true});
    res.json({ msg: "image edited", image });
  } catch (error) {
    console.log(error);
  }
});



/*router.delete("/delete/:id", async (req, res) => {
  const { _id } = req.params;
  try {
    const image = await imgModel.Delete({ _id});
    res.json({ msg: "image deleted", image });
  } catch (error) {
    console.log(error);
  }
});*/
router.delete("/deleteimg/:id", function(req, res) {
  imgModel.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      //Error Handling
    } else {


            console.log("failed to delete local image:"+err);
       
            console.log('successfully deleted local image');                                
        }
});
    }
  );
;
module.exports = router;