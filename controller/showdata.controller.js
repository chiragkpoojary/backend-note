import Note from "../models/note.models.js";
import mongoose from "mongoose";
const showdata = async (req, res) => {
  let note;
  try {
    if(req.user){
      note = await Note.find({isGlobal:false});
      
console.log("req.user in showdata:", req.user);

    } else{
  
      note = await Note.find({
  $or: [
    { isGlobal: true },
    { isGlobal: { $exists: false } }
  ]
});


      console.log(note.length)
    }

    const reversedNotes = note.reverse();
res.status(200).json({reversedNotes});

  } catch (e) {
    console.log("error while showing data", e);
    res.status(400).json({ message: "error while showing data", e });
  }
};

export default showdata;
