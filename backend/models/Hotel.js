import mongoose from 'mongoose'
const Schema = mongoose.Schema

const HotelSchema = Schema({
   name:{
    type:String,
    required:true         
   },
   type:{
     type:String,
     required:true        
   },
   city:{
      type:String,
      required:true        
    },
  address:{
     type:String,
     reuired:true       
  },
  distance:{
   type:String,
   required:true         
  },
  photos:{
    type:[String],
    required:true
  },
  desc:{
    type:Number,
    required:true        
  },
  ratings:{
     type:Number,
     min:0,
     max:5
   },
   rooms:{
     type:[String]        
   },
   CheapestPrice:{
      type:Number,
      required:true        
   },
   featured:{
       type:Number,
       required:true        
   },                
})
export default  mongoose.model("hotels",HotelSchema)