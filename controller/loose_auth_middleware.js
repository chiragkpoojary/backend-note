import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
 const token = req.headers.authorization?.replace("Bearer ","");

  if (token) {

    try {
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; 
    } catch (err) {
      console.log("Invalid token:", err.message);
    }
  }

  next(); 
}

export default auth;
