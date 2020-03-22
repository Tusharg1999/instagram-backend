const mongoose = require("mongoose");

module.exports = async function() {
  const db = await mongoose.connect("mongodb://localhost:27017/ig-clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  if (db) {
    console.log("db is connected");
  }
};
