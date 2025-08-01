
import express from "express";
import forgotPass from "../controller/forgotPass.js";

const forgotpass_router = express.Router();
forgotpass_router.post("/forgotpass", forgotPass);

export default forgotpass_router;