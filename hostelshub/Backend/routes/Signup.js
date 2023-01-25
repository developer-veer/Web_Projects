import { express } from "express";
import { handleUserReq } from "../controllers/user";

const router = express.Router();

const app = express();

app.post('/signup', handleUserReq);

export default router;