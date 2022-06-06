const express =require("express")
const { createHotel,updateHotel,deleteHotel,getHotel,GetHotels}= require("../controllers/hotels.js");
const router = express.Router();

// create hotel
router.post = ("/",createHotel)

// update hotel
router.put('/:id',updateHotel)

//  delete a hotel
router.delete('/:id',deleteHotel)
// get a specific hotel
router.get('/:id',getHotel)
// get all hotels
router.get('/',GetHotels)

export  default router;