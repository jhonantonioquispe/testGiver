'use strict';
const Student = require('./student-model');

function createStudent (req, res, next) {
  console.log('student', req);
  let student = req.body;
  return Student.addStudent(student)
  .then(newStudent => res.send({ data: newStudent }))
  .catch(() => {
    const error = {
      title: 'Failed to create student',
      description: 'Internal server error',
      status: 500
    };
    next(error);
  });
}



module.exports = { createStudent };
