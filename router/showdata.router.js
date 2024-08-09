import { Router } from "express";

import showdata from "../controller/showdata.controller.js";
const routers=Router();

routers.route("/showdata").get(showdata);

export default routers;
