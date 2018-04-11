'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  numberList: { type: Number, required: true }  
});

studentSchema.statics.addStudent = function (student) {
  return this.create(student)
    .then(newStudent => {
      let studentResult = {
        _id: newStudent._id,
        name: newStudent.name,
        lastName: newStudent.lastName,
        numberList:newStudent.numberList
      }
      return studentResult;
    })
    .catch((error) => {
      console.log('error creating student ', error)
    });
};

studentSchema.statics.getAll = function (student) {
  return this.find().lean()
    .then(allStudents => {
      return allStudents;
    })
    .catch((error) => {
      console.log('error get all Student ', error)
    });
};

module.exports = mongoose.model('Student', studentSchema);
