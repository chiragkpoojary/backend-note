import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
 import  connectdb from "./database/connect.js"; 

app.use(express.json());
app.use(cors());

import route from "./router/createednote.routes.js";
app.use("/api",route);
import routers from "./router/showdata.router.js";
app.use("/api",routers);
import routers_del from "./router/delete.router.js";
app.use("/api",routers_del);
import auth from "./router/auth.router.js";
app.use("/api",auth);
connectdb().then(
app.listen(process.env.PORT||8080, () => {
    console.log('Server is running on port 8080');
})
)


