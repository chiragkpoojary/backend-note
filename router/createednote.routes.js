import { Router } from "express";
import notecreated from "../controller/createednote.controller.js";
const router=Router();
router.route("/creatednote").post(notecreated);


export default router;
