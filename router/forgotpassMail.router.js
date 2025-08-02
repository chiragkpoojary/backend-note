
import express from "express";
import forgotPass_Mail from "../controller/forgotPass_Mail.js";

const forgotpass_router = express.Router();
forgotpass_router.post("/forgotpass", forgotPass_Mail);

export default forgotpass_router;