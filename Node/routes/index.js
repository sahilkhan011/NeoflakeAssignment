import express from "express";
import { create, getAll, remove } from "../controller/index.js";
const router = express.Router();
router.get("/", getAll).post("/", create).delete("/", remove);
