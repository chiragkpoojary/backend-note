import mongoose, { Schema } from "mongoose";
const visitSchema = new Schema({
    _id: { type: String, default: "main" },
    count: { type: Number, default: 0 },
});


const Visit = mongoose.model("Visit", visitSchema);
export default Visit;
