const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
const Task = require("../models/Task");
const User = require("../models/User");

// GET /api/flats
// router.get("/", (req, res) => {
//   // return all flats
//   Flat.find({})
//     // .populate("tasks")
//     .then(flats => {
//       res.json(flats);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

const mongoose = require("mongoose");

router.get("/:id", (req, res) => {
  // return 1 flat w/ a given id
  const flatId = req.params.id;
  console.log("This is the flat ID", flatId)

  if (!mongoose.Types.ObjectId.isValid(flatId)) {
    res.status(400).json({ message: "Flat ID is not valid" });
    return;
  }
});

module.exports = router;
