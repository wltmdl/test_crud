const mongoose = require("mongoose");
//const dotenv = require("dotenv");  //server.js 에서 .config 해서 필요없음
//dotenv.config(); 

mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser:true,
        //useUnifiedTopology:true,
        useFindAndModify:false,
        //useCreateIndex:true
    }
)

const db = mongoose.connection;

db.once("open",()=>console.log("db connected"))
db.on("error",(error)=>{console.log(error)})