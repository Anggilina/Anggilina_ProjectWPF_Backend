
module.exports = (mongoose) => {
  const { Schema } = require("mongoose");
  const Ukm = mongoose.model(
      "ukm",
      mongoose.Schema(
        {
          nama: String,
          jumlah_anggota: String,
          pembina: String,
          foto: String,
          kategori: {
            type: Schema.Types.ObjectId,
            ref: 'kategori',
        },
        },
        { timestamps: true }
      )
    );
  
    return Ukm;
  };