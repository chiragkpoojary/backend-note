import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

 const  changepass= async(req,res)=>{

    const {password}=req.body;
    const{id,token}=req.params;

    try {
        const user = await User.findOne({_id:id});

        if (!user) {
            return res.status(401).json({error: "no user found"});
        }
        const verify=jwt.verify(token, process.env.JWT_FORGOT);

        if(!verify){
            return res.status(401).json({error: "invalid token or not verified"});
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: encryptedPassword,
                },
            }
        );

        res.status(200).json({ message: 'Password has been reset' });
    }catch(err){
          res.status(401).json({error: "something went ooo wrong"});
          console.log(err)
    }

}
export default changepass;