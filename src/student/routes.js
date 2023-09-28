import { Router } from "express";
import {
  addStudent,
  deleteStudentById,
  getStudents,
  getStudentsByID,
} from "./controller.js";

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentsByID);
router.delete("/:id", deleteStudentById);

export default router;
