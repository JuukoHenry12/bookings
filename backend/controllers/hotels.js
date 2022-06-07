import Hotel from "../models/Hotel.js"
export const createHotel =async (req,res,next)=>{
  const NewHotel =new Hotel(req.body)
  try{
     const saveHotel =await NewHotel.save() 
     res.status(200).json(saveHotel)      
  } catch(err){
      next(err)     
  }       
}

export const updateHotel=async(req,res,next)=>{
   try {
        const updatedHotel = await newHotel.findByIdAndUpdate(req.params.id, { $set: body.req },{new:true})
        res.status(200).json(updatedHotel)
   } catch (err) {
       next(err)  
  }     
}

export const deleteHotel =async(req,res,next)=>{
   try {
      const DeleteHotel = await newHotel.findByIdAndDelete(req.params.id)
      res.status(200).json("the hotel has been deleted")
   } catch (err) {
      next(err)
   }
}

export const getHotel=async(req,res,next)=>{
   try {
            const GetHotel = await newHotel.findById(req.params.id)
            res.status(200).json(GetHotel)
   } catch (err) {
            next(err)
   }
}
 
 export const GetHotels =async(req,res,next)=>{
   try {
      const GetHotels = await newHotel.find()
            res.status(200).json(GetHotels)
   } catch (err) {
      next(err)
   }
}

