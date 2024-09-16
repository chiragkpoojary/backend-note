import { Router } from "express";

import deletedata from "../controller/deletenote.js";
const routers_del=Router();

routers_del.route("/delete/:id").delete(deletedata);

export default routers_del;
