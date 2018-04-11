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
    .then(newUser => {
      console.log('student ', newUser)
    })
    .catch((error) => {
      console.log('error creating student ', error)
    });
};

module.exports = mongoose.model('Student', studentSchema);
