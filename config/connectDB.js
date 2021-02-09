const mongoose=require('mongoose');
require('dotenv').config({path:'./config/.env'})
const connectDB = async () => {
try{
 await mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true,useCreateIndex: true ,useUnifiedTopology: true });
 console.log('MongoDB connected...');
}
catch
(err) {console.log(err);
}
}

module.exports = connectDB