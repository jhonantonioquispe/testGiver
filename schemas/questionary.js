/*
{
  "totalScore": 35,
  "author": "steve gregory",
  "type": "test", // this is an enum  posble values 'test', 'practice'
  "questions": [
    {
      "questionText": "cual es el primero?",
      "options": [
        {
          "text": "option the first",
          "attachment": ""
        },
        {
          "text": "segunda opcion",
          "attachment": "imagen_segunda.jpg"
        }
      ],
      "answer": "0"
    },
    {
      "questionText": "cual es el segundo?",
      "options": [
        {
          "text": "option the first",
          "attachment": ""
        },
        {
          "text": "option the second",
          "attachment": ""
        }
      ],
      "answer": "1"
    }
  ]
}*/

const schema = {
  totalScore: { type: Number },
  author: { type: String },
  type: { type: String },
  creationDate: { type: Date },
  questions: [
    {
      questionText: { type: String },
      options: [{
        text: { type: String },
        attachment: { type: String },
      }],
      answer: { type: String }
    }]
};

module.exports = schema;