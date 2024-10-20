const { mongoose } = require("../config/db");

let userObject = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    role: {
      type: String,
      default: "user",
    },
  },
  { timstamps: true }
);

exports.userObject = userObject;
