import { Router } from "express";
import { getStudents } from "./controller.js"

const router = Router();

router.get("/", getStudents);
export default router;
