import Note from "../models/note.models.js";
import mongoose from "mongoose";
const showdata = async (req, res) => {
  let note;
  let page = req.query.page;
  let limit=req.query.limit;
let total;
  let skip=(page-1)*limit;
    try {
      if (req.user) {

          if (req.user.role === "admin") {
              note = await Note.find({
                  $or: [
                      { isGlobal: true },
                      { isGlobal: { $exists: false } },
                      { userId: req.user.id }
                  ]
              }).sort({ createdAt: -1 }).skip(skip).limit(limit);
              total = await Note.countDocuments({
                  $or: [
                      {isGlobal: true},
                      {isGlobal: {$exists: false}}
                  ]
              })


          }else{
              note = await Note.find({$and:[{isGlobal:false},{
                      userId: req.user.id}]}).sort({createdAt:-1}).skip(skip).limit(limit);
              total= await Note.countDocuments({userId:req.user.id})
          }





    } else{

          note = await Note.find({

                   isGlobal: true

          }).sort({ createdAt: -1 }).skip(skip).limit(limit);
          total = await Note.countDocuments({
              $or: [
                  {isGlobal: true},
              ]
          })


    }


    res.status(200).json({note,total});

  } catch (e) {
    console.log("error while showing data", e);
    res.status(400).json({ message: "error while showing data", e });
  }
};

export default showdata;
