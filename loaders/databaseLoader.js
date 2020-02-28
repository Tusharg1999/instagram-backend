const mongoose = require("mongoose");

module.exports = async function() {
  const db = await mongoose.connect("mongodb://localhost:27017/ig-clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  if (db) {
    console.log("db is conected");
  }
};
