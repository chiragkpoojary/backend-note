import mongoose, { Schema } from 'mongoose';

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
    isPublic: {
      type: Boolean,
      default: false,
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
