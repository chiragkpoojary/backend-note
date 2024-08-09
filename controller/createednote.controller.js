import Notes from "../models/note.models.js";

async function noteroute(req,res) {
  //take all those input and store in db
try{
    const { title, tags, description } = req.body;
  
    const note = await Notes.create({
      title,
      tags,
       description
    });

    await note.save();
      res.status(201).json({ message: "Note successfully created", note });
    
  }catch(e){
 console.log("error in controller",e);
    res.status(400).json({message:"error in controller",e});

  } 
 
}

export default noteroute;
