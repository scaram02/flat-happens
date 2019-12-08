const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  // id: String,
  name: String,
  // description: String,
  week: {
    type: Schema.Types.ObjectId,
    ref: "Week"
  },
  flat: {
    type: Schema.Types.ObjectId,
    ref: "Flat"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  rating: Number,
  finished: Boolean
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
