import express from "express"
//import createError from "../utils/error.js"

import { createHotel, updateHotel, deleteHotel, getHotel, GetHotels } from "../controllers/hotels.js";
const router =express.Router()

// create hotel
router.post = ("/", createHotel)

// update hotel
router.put('/:id', updateHotel)

//  delete a hotel
router.delete('/:id', deleteHotel)
// get a specific hotel
router.get('/:id', getHotel)
// get all hotels
router.get('/', GetHotels)

export default router