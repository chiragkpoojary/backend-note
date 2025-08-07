import Notes from "../models/note.models.js";

export default async function Polling(req,res) {
    try {
        const sinceParam = req.query.since;

        const since = new Date(sinceParam);



        const notes = await Notes.find({
            updatedAt: { $gt: since }
        });

        res.json(notes);
    } catch (err) {
        console.error("Polling error:", err);
        res.status(500).json({ error: "Server error" });
    }
}