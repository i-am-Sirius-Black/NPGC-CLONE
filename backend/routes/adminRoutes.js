import express from "express";
import { getData, addData, deleteData, updateData } from "../controllers/adminController.js";


const router = express.Router();

router.get("/", getData); 
router.post("/:section", addData);
router.put("/:section/:id", updateData);
router.delete("/:section/:id", deleteData);

console.log("Admin routes registered");

export default router;
