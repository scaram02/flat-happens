const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flatSchema = new Schema({
  name: String,
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Flat = mongoose.model("Flat", flatSchema);

module.exports = Flat;
