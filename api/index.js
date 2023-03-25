// There are two ways to import express

// 1: import express from "express" (This is ES6 module)
// Note: For using above ES6 module we need to add a line in package.json ("type":"module")

// 2: const express = require("express") old way

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotels.js"
// import authRoute from "./routes/rooms.js"
// import authRoute from "./routes/users.js"

const app = express()
dotenv.config()

// arrow function
// Connect to DataBase
const connect  = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connection established successfully");
        
    } catch (error) {
        throw error
        
    }
};

mongoose.connection.on('disconnected', ()=> {
    console.log(" Oops!! disconnected to Database");
  });
  
  
mongoose.connection.on('connected', ()=> {
    console.log("Wallah!! connected to Database again");
  });



// middlewares

app.use(express.json())

app.use("/api/auth",authRoute);
// app.use("/api/users",authRoute);
app.use("/api/hotels",hotelRoute);
// app.use("/api/rooms",authRoute);



app.listen(8800,()=>{
    connect();
})