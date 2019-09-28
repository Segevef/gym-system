const mongoose = require("mongoose");
module.exports = function setupDB() {
  const dbRoute = "mongodb://wix-gym:segev123@ds059496.mlab.com:59496/wix-gym";
  mongoose.connect(dbRoute, { useNewUrlParser: true })

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
};
