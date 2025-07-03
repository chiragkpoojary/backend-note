import { Router } from "express";
import auth_middleware from "../controller/auth_middleware.js";
import personaldeletedata from "../controller/personaldelete.js";
const routers_per_del=Router();

routers_per_del.route("/perdelete/:id").delete(auth_middleware,personaldeletedata);

export default routers_per_del;
