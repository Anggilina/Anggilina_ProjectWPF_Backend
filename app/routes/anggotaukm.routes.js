module.exports = (app) => {
    const anggotaukms = require("../controller/anggotaukm.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", anggotaukms.create);
  
    router.get("/", anggotaukms.findAll);
  
    router.get("/published", anggotaukms.findAllPublished);
  
    router.get("/:id", anggotaukms.findOne);
  
    router.put("/:id", anggotaukms.update);
  
    router.delete("/:id", anggotaukms.delete);
  
    router.delete("/", anggotaukms.deleteAll);
  
    app.use("/api/anggotaukm", router);
  };