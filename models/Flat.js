const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flatSchema = new Schema({
  id: String,
  name: String,
  weeklyTasks: {
    type: Schema.Types.ObjectId,
    ref: "Task"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }


});

const Flat = mongoose.model("Flat", flatSchema);

module.exports = Flat;

