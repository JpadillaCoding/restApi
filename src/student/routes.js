import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("using api route");
});
export default router;
