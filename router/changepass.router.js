import express from "express";
import changepass from "../controller/Changepass.js";

const changepass_router=express.Router();
changepass_router.post("/resetpassword/:id/:token", changepass);

export default changepass_router;