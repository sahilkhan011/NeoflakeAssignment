import express from "express";
import { create, getAll } from "../controllers/index.js";
const router = express.Router();
router.get("/", getAll).post("/", create);

export default router;
