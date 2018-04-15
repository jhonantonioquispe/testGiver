/*
{
  "questionaryId": "asdfdbf56tdyh0",
  "score": 36,
  "studentId": "asdfdbf56tdyh1",
  "creationDate": "", //is not send in request
  "answers": [{
    "questionId":"asdfdbf56tdyh2",
    "answerId": "asdfdbf56tdyh3",
    "answerIndex": 1
  }]
};
*/
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const schema = {
  questionaryId: { type: ObjectId },
  score: { type: Number },
  studentId: { type: ObjectId },
  creationDate: { type: Date },
  answers: [{
    questionId: {type: ObjectId },
    answerId: {type: ObjectId },
    answerIndex: {type: Number}
  }]
};

module.exports = schema;
