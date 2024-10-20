const express = require("express");
const { mongoose } = require("./config/db");
const { userObject } = require("./models/user");
require("dotenv").config();
const app = express();
app.use(express.json());
// Rgistration Routes for teacher , student and admin

app.get("/student", (req, res) => {
  const allUsers = new mongoose.model("allUsers", userObject);
  const user = new allUsers(req.body);
  // Save the user to the database
  user
    .save()
    .then((d) => {
      res.status(200).json({
        message: "User saved successfully",
        user: d,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error saving user",
        error: err,
      });
    });
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
