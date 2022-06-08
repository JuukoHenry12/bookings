import  express from "express";
import  dotenv from "dotenv"
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelRoute from './routes//hotels.js'
import roomsRoute from './routes/rooms.js';
import {mongoose}  from 'mongoose';

const app =express()
dotenv.config();

const port =5000

const connect =async()=>{
   try{
      await mongoose.connect(process.env.MONGO);
      console.log("connected to database")
   }catch(error){
      throw error
   }
}

mongoose.connection.on("disconnected",()=>{
   console.log("mogoDb disconnected")
})
mongoose.connection.on("connected",()=>{
   console.log("mogoDb connected")
})

// middleware

app.use(express.json());

// routes
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
 const errorStatus =err.status || 500
 const errorMessage =err.message || "Something went wrong"
 return res.status(500).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack       
 })
})

app.listen(port,()=>{
   connect();
   console.log(`The sever is running on port number ${port}`)
})