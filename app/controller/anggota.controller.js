const db = require("../models");
const Anggota = db.anggota;

exports.create = (req, res) => {
  const anggota = new Anggota({
    nama: req.body.nama,
    nim: req.body.nim,
    prodi: req.body.prodi,
  });

  // Save Anggota in the database
  anggota
    .save(anggota)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Anggota.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Anggota.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Anggota.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Anggota.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Anggota with id=${id}. Maybe Anggota was not found!`,
        });
      } else res.send({ message: "Anggota was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Anggota with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Anggota.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Anggota with id=${id}. Maybe Anggota was not found!`,
        });
      } else {
        res.send({
          message: "Anggota was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Anggota with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};