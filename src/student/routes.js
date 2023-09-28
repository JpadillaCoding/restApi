import { Router } from "express";
import { addStudent, getStudents, getStudentsByID } from "./controller.js"

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent)
router.get("/:id", getStudentsByID)

export default router;
