import mongoose from "mongoose";
const db_name="noteapp";
const connectdb = async () => {
  try{
   const dbinstatnce = await mongoose.connect(`${process.env.MONGO_DB}/${db_name}`);
  console.log("db connected sucessfully",dbinstatnce.connection.host);
}
catch(e){
console.log("the error is",e);
    process.exit(1);
}
}
export default connectdb
