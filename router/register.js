
import { Router } from "express";

import register from "../controller/register.js";
const reg_rout=Router();

reg_rout.route("/register").post(register);

export default reg_rout;