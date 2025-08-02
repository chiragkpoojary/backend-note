import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
 import  connectdb from "./database/connect.js"; 

app.use(express.json());
app.use(cors());
app.use("/api",changepass_router);
import forgotpassRouter from "./router/forgotpassMail.router.js";
app.use("/api", forgotpassRouter);
import route from "./router/createednote.routes.js";
app.use("/api",route);
import routers from "./router/showdata.router.js";
app.use("/api",routers);
import auth from "./router/auth.router.js";
app.use("/api",auth);
import register from "./router/register.js";
app.use("/api",register)
import login from "./router/login.js";
app.use("/api",login)
import routers_per_del from "./router/personaldelete.js";
import changepassRouter from "./router/changepass.router.js";
import changepass_router from "./router/changepass.router.js";
app.use("/api",routers_per_del)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });
  

connectdb().then(
app.listen(process.env.PORT||8080, () => {
    console.log('Server is running on port 8080');
})
)


