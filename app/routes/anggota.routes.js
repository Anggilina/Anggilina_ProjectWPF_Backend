module.exports = (app) => {
    const anggotas = require("../controller/anggota.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", anggotas.create);
  
    router.get("/", anggotas.findAll);
  
    router.get("/published", anggotas.findAllPublished);
  
    router.get("/:id", anggotas.findOne);
  
    router.put("/:id", anggotas.update);
  
    router.delete("/:id", anggotas.delete);
  
    router.delete("/", anggotas.deleteAll);
  
    app.use("/api/anggota", router);
  };