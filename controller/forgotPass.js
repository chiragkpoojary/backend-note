
//TODO forgot password implentation
//TODO Google login
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../models/auth.model.js';
import nodemailer from 'nodemailer';

async function forgotPass(req, res) {
  const {email} = req.body;

  try {
    const user = await User.findOne({email});

    if (!user) {
      return res.status(401).json({error: "Invalid credentials cannot change password"});
    }
    const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_FORGOT, {expiresIn: '10m'});
    const url = `http://localhost:8080/api/resetpassword?id=${user._id}&token=${token}`;
    const transpoder = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:process.env.EMAIL,
        pass: process.env.PASSWORD_NODEMAILER
      }
    });
    const mailOptions = {
      to: user.email,
      from: process.env.MAIL,
      subject: 'Password Reset Request',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${url}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transpoder.sendMail(mailOptions);
    res.status(200).json({message: 'Password reset link sent'});


  } catch (error) {
    res.status(500).json({message: 'Something went wrong'});
    console.log(error);
  }
}

export default forgotPass;
