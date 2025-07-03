import { Router } from "express";
import notecreated from "../controller/createednote.controller.js";
import auth_mid from "../controller/loose_auth_middleware.js"
const router=Router();
router.route("/creatednote").post(auth_mid, notecreated); 



export default router;
