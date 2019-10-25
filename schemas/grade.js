/*
{
  "creationDate": { type: Date }, // is not send
  "grade": "segundo",
  "paralel": "a",
  "gradeNumeral": 3
}
*/
const schema = {
  creationDate: { type: Date },
  grade: { type: String, required: false },
  paralel: { type: String, required: false },
  gradeNumeral: { type: Number, required: false },
  gradeLiteral: { type: String } 
}

module.exports = schema;