const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.ukm = require("./ukm.model.js")(mongoose);
db.anggota = require("./anggota.model.js")(mongoose);
db.kategori = require("./kategori.model.js")(mongoose);
db.anggotaukm = require("./anggotaukm.model.js")(mongoose);

module.exports = db;