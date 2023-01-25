
import express from "express";
import { GetDataAuth, LoginContr } from "../controllers/LoginContr.js";

const authRouter = express.Router();

authRouter.post('/' , LoginContr);

//authRouter.get('/' , LoginContr);



export default authRouter;