import pool from "../../db.js";

const getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

export { getStudents };
