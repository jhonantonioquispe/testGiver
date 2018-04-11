'use strict';
const Student = require('./student-model');

function createStudent (req, res, next) {
  let student = req.body;
  return Student.addStudent(student)
  .then(newStudent => {
    res.send({ data: newStudent});
    return;
  })
  .catch((err) => {
    const error = {
      title: 'Failed to create student',
      description: 'Internal server error',
      status: 500,
      err:err
    };
    next(error);
  });
}

function getAllStudents (req, res, next) {
  return Student.getAll()
  .then(allStudents => res.send({ data: allStudents }))
  .catch((error) => {
    next(error);
  });
}



module.exports = { createStudent, getAllStudents };
