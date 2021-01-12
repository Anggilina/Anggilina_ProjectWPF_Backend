module.exports = (app) => {
    const kategoris = require("../controller/kategori.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", kategoris.create);
  
    router.get("/", kategoris.findAll);
  
    router.get("/published", kategoris.findAllPublished);
  
    router.get("/:id", kategoris.findOne);
  
    router.put("/:id", kategoris.update);
  
    router.delete("/:id", kategoris.delete);
  
    router.delete("/", kategoris.deleteAll);
  
    app.use("/api/kategori", router);
  };