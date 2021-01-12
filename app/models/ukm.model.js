
module.exports = (mongoose) => {
  const objectId = mongoose.Schema.Types.ObjectId;
  const Ukm = mongoose.model(
      "ukm",
      mongoose.Schema(
        {
          nama: String,
          jumlah_anggota: String,
          pembina: String,
          foto: String,
          kategori: {
            type: objectId,
            ref: 'kategoris',
          },
        },
        { timestamps: true }
      )
    );
  
    return Ukm;
  };