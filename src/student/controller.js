import pool from "../../db.js";
import {
  getStudentsQuery,
  getStudentByIdQuery,
  checkEmailExists,
  addStudentQuery,
  deleteStudentByIdQuery,
  checkIdExists,
} from "./queries.js";

const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists.");
    }
    pool.query(addStudentQuery, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send(`Student, ${name}, Created Successfully`);
    });
  });
};

const deleteStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(checkIdExists, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("user does not exists.");
    }
    pool.query(deleteStudentByIdQuery, [id], (error, results) => {
      if (error) throw error;
      res.status(201).send("student deleted.");
    });
  });
};
export { getStudents, getStudentsByID, addStudent, deleteStudentById };
