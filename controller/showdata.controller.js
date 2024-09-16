import Note from "../models/note.models.js";

const showdata = async (req, res) => {
  try {
    const note = await Note.find();
    res.status(200).json(note);
  } catch (e) {
    console.log("error while showing data", e);
    res.status(400).json({ message: "error while showing data", e });
  }
};

export default showdata;
