const express =require('express');
const {authRoute} =require('./routes/auth')
const {usersRoute} =require('./routes/users')
const {hotelRoute} =require('./routes//hotels')
const {roomsRoute} =require('./routes/rooms')
const app =express()
const port =5000


// middleware
app.use(express.json)


// routes
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
 const errorStatus =err.status || 500
 const errorMessage =error.message || "Something went wrong"
 return res.status(500).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack       
 })
})

app(port,()=>{
   console.log(`The sever is running on port number ${port}`)
})