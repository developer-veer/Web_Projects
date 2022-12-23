import express from "express";
import { feeDefaultersList, registeredList } from "../controllers/students.js";

const router = express.Router();

router.get("/registeredList", registeredList)
router.get("/feeDeafultersList", feeDefaultersList)

export default router;