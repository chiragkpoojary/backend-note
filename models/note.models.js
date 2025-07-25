import mongoose, { Schema } from 'mongoose';
//TODO Role BAsed Acess
const noteschema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    isGlobal: {
      type: Boolean,
      default: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:false
    },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model('note', noteschema);

export default Notes;
