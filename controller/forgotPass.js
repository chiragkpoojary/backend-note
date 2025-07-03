
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import 'dotenv/config';
// import User from '../models/auth.model.js';

// async function login(req, res)  {
//   const { email, password } = req.body;
//   const user = await User.findOne({email});
//   if (!user) {
//     return res.status(401).json({ error: "Invalid credentials cannot change password" });
//   }

//    const hashed = await bcrypt.hash(password, 10);
//     const user = await User.updateOne({password: hashed }).where email==email;

// res.json({
//   message: "Sign-in successful",
//   token,
//   welcome: `Welcome ${user.username}`
// });

  
// }

// export default login;
