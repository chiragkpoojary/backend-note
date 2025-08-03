import Note from "../models/note.models.js";

const searchData = async (req, res) => {
    const { search = "" } = req.query;
    const regexSearch = { title: { $regex: search, $options: "i" } };

    let filter;
    if (req.isAuthenticated) {
        filter = {
            $and: [
                { isGlobal: false, ...regexSearch },
                { userId: req.user.id, ...regexSearch }
            ]
        };
    } else {
        filter = {
            isGlobal: true,
            ...regexSearch
        };
    }

    const notes = await Note.find(filter).sort({ createdAt: -1 });
    res.json(notes);
};

export default  searchData ;