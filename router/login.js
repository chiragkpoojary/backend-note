
import { Router } from "express";

import login from "../controller/login.js";
const login_rout=Router();

login_rout.route("/login").post(login);

export default login_rout;