import Note from "../models/note.models.js";
import mongoose from "mongoose";
const showdata = async (req, res) => {
  let note;
  let page = req.params.page;
  let limit=req.params.limit;
  let skip=(page-1)*limit;
  try {
    if(req.user){

      note = await Note.find({$and:[{isGlobal:false},{
          userId: req.user.id}]}).sort({createdAt:-1}).skip(skip).limit(limit).exec();
      

    } else{
  
      note = await Note.find({
  $or: [
    { isGlobal: true },
    { isGlobal: { $exists: false } }
  ]
}).sort({createdAt:-1}).skip(skip).limit(limit);


    }


res.status(200).json({note});

  } catch (e) {
    console.log("error while showing data", e);
    res.status(400).json({ message: "error while showing data", e });
  }
};

export default showdata;
