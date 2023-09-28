import express from "express";
import studentRoutes from "./src/student/routes.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
