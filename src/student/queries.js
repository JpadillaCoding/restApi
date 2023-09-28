const getStudentsQuery = "SELECT * FROM students";
const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const checkIdExists = "Select s FROM students s WHERE s.id = $1"
const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4)";
const deleteStudentByIdQuery = "DELETE FROM students WHERE id = $1"
export {
  getStudentsQuery,
  getStudentByIdQuery,
  addStudentQuery,
  deleteStudentByIdQuery,
  checkEmailExists,
  checkIdExists
};
