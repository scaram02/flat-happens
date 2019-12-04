const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    flat: {
      type: Schema.Types.ObjectId,
      ref: "Flat"
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: "Task"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
