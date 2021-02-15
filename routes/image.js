const multer = require('multer');
 const  imgModel = require('../models/Image');
const router = require('express').Router();
const fs= require('fs')
const path= require('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname+'/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' +Date.now())
    }
});
const  upload = multer({ storage: storage });

/*router.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('index', {  items });
        }
    });
});
*/

router.post('/', upload.single('image'),async (req, res, next) => {
 
console.log(__dirname)
    const obj = {
        name: req.body.name,

    
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    
   
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
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




router.delete("/deleteimg/:id", function(req, res) {
  imgModel.findByIdAndRemove(req.params.id, function(err) {
    if(err) {//Error Handling 

         console.log("failed to delete  image:" + err);

    } else {


       
            console.log('successfully deleted  image');                                
        }
});
    }
  );
;

module.exports = router;