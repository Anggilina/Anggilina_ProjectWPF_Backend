
module.exports = (mongoose) => {
  const objectId = mongoose.Schema.Types.ObjectId;
  const Anggotaukm = mongoose.model(
      "anggotaukm",
      mongoose.Schema(
        {
          id_ukm: {
            type: objectId,
            ref: 'ukms',
          },
          id_anggota: {
            type: objectId,
            ref: 'anggotas',
          },
          jabatan: String,
          tgl_bergabung: String,
        },
        { timestamps: true }
      )
    );
  
    return Anggotaukm;
  };