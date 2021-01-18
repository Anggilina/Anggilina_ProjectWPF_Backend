
module.exports = (mongoose) => {
  const { Schema } = require("mongoose");
  const Anggotaukm = mongoose.model(
      "anggotaukm",
      mongoose.Schema(
        {
          id_ukm:{
            type: Schema.Types.ObjectId,
            ref: 'ukm',
        },
          id_anggota: {
            type: Schema.Types.ObjectId,
            ref: 'anggota',
        },
          jabatan: String,
          tgl_bergabung: String,
        },
        { timestamps: true }
      )
    );
  
    return Anggotaukm;
  };