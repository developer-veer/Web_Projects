import  express  from "express";
import { deleteDocPro, getRegister, postRegisterReq } from "../controllers/RegisterController.js";
const router = express.Router();

router.post("/" ,postRegisterReq);

router.get("/" , getRegister);

router.delete("/customer/:id",deleteDocPro);


//handle post Api of AddHostel


export default router;
