import express from "express";
import { getData, addData, deleteData } from "../controllers/adminController.js";


const router = express.Router();

router.get("/", getData); 
router.post("/:section", addData);
router.delete("/:section/:id", deleteData);

export default router;
