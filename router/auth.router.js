import { Router } from "express";

import auth from "../controller/auth.js";
const auth_js=Router();

auth_js.route("/auth").post(auth);

export default auth_js;
