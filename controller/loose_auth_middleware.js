import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
 const token = req.headers.authorization?.replace("Bearer ","");
 console.log(token)
  if (token) {
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    try {
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decode",decoded)
      req.user = decoded; 
    } catch (err) {
      console.log("Invalid token:", err.message);
    }
  }

  next(); 
}

export default auth;
