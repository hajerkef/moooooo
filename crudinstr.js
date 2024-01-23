const express=require("express");
const mongoose = require("mongoose");
const router =  require("router");
const app = express();
const Instr=require('./instr')
const Groupinstr=require('./groupinstr')
app.listen(5000,()=>console.log("app running"))
 mongoose.connect( "mongodb://127.0.0.1:27017/gmycode")  
 

   
     .then(() => {
       console.log('Database connection successful')
     })
     .catch(err => {
       console.error('Database connection error')});
 const instS =   new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  formation:{
    type:String,
  },
  periode: {
    type: Number
  }
}); 
const newinstr= mongoose.model('newinstr',instS, "instructor" );
/*app.get('/gmy/:name', async (req, res) => {
  try {
    const instrs = await newinstr.findOne({ name: req.params.name });

    if (!instrs) {
      return res.status(404).json({ message: 'instructor not found' });
    }

    res.json({ name: newinstr.name, formation: newinstr.formation,periode:newinstr.periode }); // Using person.name directly, assuming it's a valid property
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});*/     // creating a record of a model and saving it
    const instr = await Instr.create({
      name: "aziz",
      formation: angular,
      periode: 2,
    });
    await instr.save();
    // creating their models
    try {
      const groupinstr = await Instr.create(Groupinstr);
      console.log("succefully created", Instr);
    } catch (err) {
      console.log(err);
    }  
