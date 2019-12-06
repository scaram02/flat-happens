const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
const Task = require("../models/Task");
const User = require("../models/User");

// GET /api/flats
router.get("/", (req, res) => {
  // return all flats
  Flat.find({})
    .populate("tasks")
    .then(flats => {
      res.json(flats);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

const mongoose = require("mongoose");
// GET /api/flats/:id
router.get("/:id", (req, res) => {
  // return 1 flat w/ a given id
  const flatId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(flatId)) {
    res.status(400).json({ message: "Flat ID is not valid" });
    return;
  }

  Flat.findById(flatId)
    .populate("tasks")
    .then(flat => {
      if (!flat) {
        res.status(404).json({ message: "flat not found" });
      } else res.json(flat);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;
