const multer = require('multer');


function buildFileRoutes(app) {
  let Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      //console.log('estamos en DEST', file);
      callback(null, "./attachments/");
    },
    filename: function (req, file, callback) {
      let filenameBuild = file.fieldname + "_" + Date.now() + "_" + file.originalname;
      //console.log('estamos en filename',filenameBuild);
      callback(null, filenameBuild);
    }
  });
  
  let upload = multer({
    storage: Storage,

  }).array("imgUploader", 1); //Field name and max count

  app.post("/attachments", function(req, res) {
    upload(req, res, function(err, algo) {
      if (err) {
        return res.end("Something went wrong!");
      }
      let responseFile = {
        fileName:req.files[0].originalname,
        path:req.files[0].path
      }
      console.log(JSON.stringify(responseFile));
      return res.end(JSON.stringify(responseFile));
    });
  });
}

module.exports = buildFileRoutes;

