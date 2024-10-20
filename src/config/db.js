const mongoose = require("mongoose");
// Middleware to parse JSON request bodies
mongoose
  .connect("mongodb://localhost:27017")
  .then((d) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = mongoose;
