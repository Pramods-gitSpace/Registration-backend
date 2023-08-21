const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
require("dotenv").config();
mongoose.set('strictQuery',false);
var routes=require('./routes/route.js');
app.use(express.json());
const PORT= process.env.PORT || 8001;
app.listen(PORT,function check(err){
    if(err){
        console.log("server error..!");
    }
    else{
        console.log("server connected..!");
    }
});

        const MongoURL= process.env.MONGO_URL;
        
        mongoose.connect(MongoURL,
        {useNewUrlParser: true, useUnifiedTopology: true},)
          .then((res)=>{console.log("connection established")})
        .catch((err)=>{console.log("database error..!")});

  app.use(cors());

app.use(routes);
