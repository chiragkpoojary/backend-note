
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../models/auth.model.js';
const JWT_SECRETS = process.env.JWT_SECRET;

async function login(req, res)  {
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if (!user) {
    return res.status(401).json({ error: "User Not Found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }


  const token = jwt.sign({ id: user.id, username: user.username,role:user.role}, JWT_SECRETS, {
    expiresIn: "1h",
  });

res.json({
  message: "Sign-in successful",
  token,
  welcome: `Welcome ${user.username}`
});

  
}

export default login;
