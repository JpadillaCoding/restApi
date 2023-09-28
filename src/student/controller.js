import pool from "../../db.js";
import { getStudentsQuery } from "./queries.js";

const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

export { getStudents };
