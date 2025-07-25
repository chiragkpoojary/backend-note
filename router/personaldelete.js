import { Router } from "express";
import loose_auth_middleware from "../controller/loose_auth_middleware.js";
import personaldeletenote from "../controller/personaldelete.js";
const routers_per_del=Router();

routers_per_del.route("/perdelete/:id").delete(loose_auth_middleware,personaldeletenote);

export default routers_per_del;
