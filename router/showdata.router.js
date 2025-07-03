import { Router } from "express";

import showdata from "../controller/showdata.controller.js";
import auth_mid from "../controller/loose_auth_middleware.js"
const routers=Router();

routers.route("/showdata").get(auth_mid,showdata);

export default routers;
