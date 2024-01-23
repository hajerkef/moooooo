const mongoose=require('mongoose')
// creating a instructor schema model
const InstrModelSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    formation:{
        type:String,
        required:true,
    },

    periode:{
      type:  Number,
    
    }
})
const Instr=mongoose.model("Instr",InstrModelSchema)
module.exports=Instr