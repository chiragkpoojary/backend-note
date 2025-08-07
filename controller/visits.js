
import Note from "../models/note.models.js";
import visitsModel from "../models/visits.model.js";

export default async function visits(req, res) {
    const result= await visitsModel.findOneAndUpdate(
    {_id: "main"},
    {$inc:{count:1}},
    {upsert: true},
    {returnDocument:"after"}
    );
    res.json({ visitCount: result.count });
}