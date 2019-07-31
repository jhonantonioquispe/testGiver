/*
{
  "firstname": "juan",
  "lastname": "perez",
  "creationDate": { type: Date },// not send in req
  "numberList": 12,
  "grade": {
    "literal": "tercero a",
    "gradeId": "akid5f78s"
  }
}
*/
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const schema = {
  fullname: { type: String, required: true },
  // firstname: { type: String, required: true },
  // lastname: { type: String, required: true },
  creationDate: { type: Date },
  numberList: { type: Number, required: true },
  grade: {
    literal: { type: String },
    gradeId: {type: ObjectId}
  }
};

module.exports = schema;