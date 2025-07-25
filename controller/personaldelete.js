
import Notes from '../models/note.models.js';


async function personaldeletenote(req, res)  {
  try {
    const userId = req.user.id;
    console.log(userId)
    const noteId = req.params.id;
console.log(noteId);
    const note = await Notes.findById(noteId);
console.log(note);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Check if it's user's personal note
    if (!note.userId || note.userId.toString() !== userId) {
      return res.status(403).json({ message: "You can only delete your own personal notes." });
    }

    await Notes.findByIdAndDelete(noteId);

    res.json({ message: "Note deleted successfully." });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

export default personaldeletenote;
