import express from "express"
const router =express.Router()

router.get("/users",(req,res)=>{
   res.send("there are users") 
})

export default router