module.exports = (mongoose) => {
    const Anggota = mongoose.model(
      "anggota",
      mongoose.Schema(
        {
          nama: String,
          nim: String,
          prodi: String,
        },
        { timestamps: true }
      )
    );
  
    return Anggota;
  };