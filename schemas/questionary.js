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

/*
example of questionary
{
  "totalScore" : 55.34,
  "author" : "jhon quispe",
  "type" : "1",
  "creationDate" : "2019-02-27T04:22:02.257Z",
  "questions" : [ 
      {
          "questionText" : "esta es una nueva pregunta que ",
          "options" : [ 
              {
                  "text" : "hola",
                  "attachment" : "imgUploader_1549941201750_views.jpg"
              }, 
              {
                  "text" : "que",
                  "attachment" : "imgUploader_1549942722887_georgina-rodriguez-novia-ronaldo-1-1548258125.jpg"
              }, 
              {
                  "text" : "tal",
                  "attachment" : "imgUploader_1549432553391_images.jpg"
              }
          ],
          "answer" : "_id0"
      }, 
      {
          "questionText" : "estamos modificando la segunda pregunta hasta ahora tendria que funcionar\n    ",
          "options" : [ 
              {
                  "text" : "tal",
                  "attachment" : "imgUploader_1549942781532_imgUploader_1527836764676_hijo05.jpg"
              }
          ],
          "answer" : "_id2"
      }, 
      {
          "questionText" : "this is the third question with a a lot of images ",
          "options" : [ 
              {
                  "text" : "tal",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }, 
              {
                  "text" : "tal www",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }, 
              {
                  "text" : "tal dfd",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }, 
              {
                  "text" : "tal dfd",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }, 
              {
                  "text" : "tal dfd",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }, 
              {
                  "text" : "tal dfd",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }, 
              {
                  "text" : "talddd",
                  "attachment" : "http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg"
              }
          ],
          "answer" : "_id1"
      }
  ]
} 
*/

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