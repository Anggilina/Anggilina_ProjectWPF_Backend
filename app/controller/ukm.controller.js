const db = require("../models");
const Ukm = db.ukm;

exports.create = (req, res) => {
  const ukm = new Ukm({
    nama: req.body.nama,
    jumlah_anggota: req.body.jumlah_anggota,
    pembina: req.body.pembina,
    kategori: req.body.kategori,
    foto: req.files[0].filename,
  });

  // Save Ukm in the database
  ukm
    .save(ukm)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Ukm.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Ukm.find(condition)
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

  Ukm.findById(id)
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

  Ukm.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Ukm with id=${id}. Maybe Ukm was not found!`,
        });
      } else res.send({ message: "Ukm was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Ukm with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Ukm.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Ukm with id=${id}. Maybe Ukm was not found!`,
        });
      } else {
        res.send({
          message: "Ukm was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Ukm with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};