const db = require("../models");
const Anggotaukm = db.anggotaukm;

exports.create = (req, res) => {
  const anggotaukm = new Anggotaukm({
    id_ukm: req.body.id_ukm,
    id_anggota: req.body.id_anggota,
    jabatan: req.body.jabatan,
    tgl_bergabung: req.body.tgl_bergabung,
  });

  // Save Anggotaukm in the database
  anggotaukm
    .save(anggotaukm)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Anggotaukm.",
      });
    });
};

exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama
    ? { nama: { $regex: new RegExp(nama), $options: "i" } }
    : {};

  Anggotaukm.find(condition).populate('id_ukm').populate('id_anggota')
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

  Anggotaukm.findById(id)
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

  Anggotaukm.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Anggotaukm with id=${id}. Maybe Anggotaukm was not found!`,
        });
      } else res.send({ message: "Anggotaukm was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Anggotaukm with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Anggotaukm.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Anggotaukm with id=${id}. Maybe Anggotaukm was not found!`,
        });
      } else {
        res.send({
          message: "Anggotaukm was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Anggotaukm with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};