import  mongoose,{Schema} from 'mongoose';

const noteschema = new Schema({
  title:{
    type:String,
    required:true,
    index:true
  },
  tags:[{
      type:String
  }

  ],
  description:{
    type:String
  }
},
  {
    timestamps:true
  }
  )

 const Notes = mongoose.model("note",noteschema);

export default Notes;
