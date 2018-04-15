/*
{
  "creationDate": { type: Date }, // is not send
  "firstname": "livia magaly",
  "lastname": "condori calani",
  "subject": "tecnica y tecnologia",
  "password": "123456"
}
*/
const schema = {
  creationDate: { type: Date },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  subject: { type: String, required: false } ,
  password: { type: String, required: false }
}

module.exports = schema;