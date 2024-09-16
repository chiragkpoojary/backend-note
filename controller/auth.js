async function auth(req, res) {
    try {

      const { passcode } = req.headers;
      
      console.log("Received passcode:", passcode);
  
      
      if (!passcode || passcode !== process.env.PASS) {
        return res.status(403).json({ message: "Unauthorized: Invalid passcode" });
      }
      
      
      return res.status(200).json({ message: "Welcome, admin!" });
  
    } catch (e) {
      
      console.error("Error in auth controller:", e);
      res.status(500).json({ message: "Internal server error", error: e.message });
    }
  }
  
  export default auth;
  

