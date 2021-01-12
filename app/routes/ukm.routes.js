module.exports = (app) => {
    const ukms = require("../controller/ukm.controller.js");
  
    var router = require("express").Router();

    var multer = require("multer");
    var path = require("path");
    const generateFileName = () => {
        const dateNow = Date.now();
        const random = Math.floor(Math.random() * 9000000000000) + 1000000000000;
        return `${dateNow}-${random}`;
    };

    var upload = multer({
      storage: multer.diskStorage({
          destination: function (req, file, callback) {
              callback(null, "./uploads/gambar");
          },
          filename: function (req, file, callback) {
              callback(
                  null,
                  Date.now() +
                  Math.floor(Math.random() * 9000000000000) +
                  1000000000000 +
                  path.extname(file.originalname)
              );
            },
          }),
  
          fileFilter: function (req, file, callback) {
              var ext = path.extname(file.originalname);
              if (
                  ext !== ".png" &&
                  ext !== ".jpg" &&
                  ext !== ".gif" &&
                  ext !== ".jpeg"
              ) {
                  return callback(/*res.end('Only images are allowed')*/ null, false);
              }
              callback(null, true);
          },
      });
      router.post("/", upload.any(), ukms.create);


    router.post("/", ukms.create);
  
    router.get("/", ukms.findAll);
  
    router.get("/published", ukms.findAllPublished);
  
    router.get("/:id", ukms.findOne);
  
    router.put("/:id", ukms.update);
  
    router.delete("/:id", ukms.delete);
  
    router.delete("/", ukms.deleteAll);
  
    app.use("/api/ukm", router);
  };