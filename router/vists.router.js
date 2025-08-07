import {Router} from "express";

import visits from "../controller/visits.js";

const visit_router = Router();
visit_router.get('/vists', visits);
export default visit_router;