import {Router} from "express";
import Polling from "../controller/polling.js";

const pol_router=Router();
pol_router.get('/polling',Polling);
export default pol_router;