import express from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/auth.model.js';



 async function register (req, res){
  try {
    const { username,email,password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser)
      return res.status(400).json({ message: 'Username already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username,email,password: hashed });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log( err.message)
  }
}

export default register;
