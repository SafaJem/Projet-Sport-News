// Require express
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')

// Require connectDB
const connectDB = require('./config/connectDB');

// Init express
const app = express();

// Middleware
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// Set EJS as templating engine 
app.set("view engine", "ejs");

// connectDB
connectDB();






const multer = require('multer');
 const  imgModel = require('./models/Image');




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const  upload = multer({ storage: storage });

app.get('/', (req, res) => {
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


app.post('/', upload.single('image'), (req, res, next) => {
 
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
 
app.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const image = await Image.findOneAndUpdate({ _id }, { $set: req.body },{new:true});
    res.json({ msg: "image edited", image });
  } catch (error) {
    console.log(error);
  }
});



app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const image = await Image.findOneAndDelete({ _id: id });
    res.json({ msg: "image deleted", image });
  } catch (error) {
    console.log(error);
  }
});

app.use('/api/sport', require ('./routes/user.js'));
app.use('/api/article', require ('./routes/article.js'));
app.use('/api/profile', require ('./routes/profile'));

// Create port
const port = process.env.PORT || 5000;
// Launch the serveer
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);