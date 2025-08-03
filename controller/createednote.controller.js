import Notes from "../models/note.models.js";
import mongoose from "mongoose";
async function noteroute(req,res) {
try{
    const { title, tags, description } = req.body;
    

  
    const note = await Notes.create({
      title,
      tags,
       description,
       isGlobal:!req.isAuthenticated,
        userId: req.isAuthenticated ? req.user.id : null,
    });


      res.status(201).json({ message: "Note successfully created", note });
    
  }catch(e){
 console.log("error in controller",e);
    res.status(400).json({message:"error in controller",e});

  } 
 
}

export default noteroute;
