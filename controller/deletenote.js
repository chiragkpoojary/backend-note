
import Note from "../models/note.models.js" 

async function deletenote(req, res) {
    try {
        const id = req.params.id;
      const passcode = req.headers['passcode'];
      

      if (!id) {
        return res.status(400).json({ message: "Note ID is required" });
      }
      
     
      if (!passcode || passcode !== process.env.PASS) {
        return res.status(403).json({ message: "Unauthorized: Invalid passcode" });
      }
  
     
      const note = await Note.findById(id);
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      await note.deleteOne(); 
      res.status(200).json({ message: "Note deleted successfully" }); // Simplified response
  
    } catch (e) {
      console.error("Error in deletedata controller:", e);
      res.status(500).json({ message: "Error deleting note", error: e.message });
    }
  }

export default deletenote;

