import  express  from "express";
import { addhostelCont, upload } from "../controllers/AddHostelCont.js";

const AddHostelRouter = express.Router();


AddHostelRouter.post("/" , upload, addhostelCont);

export default AddHostelRouter;

