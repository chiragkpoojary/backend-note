import {Router} from "express";
import searchData from "../controller/searchData.js";

const search_router = Router();
search_router.get("/searchdata",searchData);
export default search_router;