const mongoose = require("mongoose");

const url = 'mongodb+srv://Anggilina:v3W8hjxCuxTkAGDB@cluster0.slcnl.mongodb.net/WPFKELOMPOK2?retryWrites=true&w=majority';

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });