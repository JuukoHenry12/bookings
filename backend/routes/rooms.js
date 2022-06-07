import express from "express"
const router =express.Router()

router.get("/room",(req,res)=>{
   res.send("there are six rooms") 
})

export default router