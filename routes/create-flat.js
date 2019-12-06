const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
const User = require("../models/User");

// POST /api/flats
router.post("/", (req, res) => {
  // create 1 flat
  console.log("helloooooo", req.body);
  Flat.create({
    name: req.body.name,
    // description: req.body.description,
    user: [req.user._id]
  })
    .then(flat => {
      User.findByIdAndUpdate(req.user._id, { flat: flat._id }, { new: true })
        .populate("flat")
        .then(updatedData => {
          console.log(updatedData);
          res.json(updatedData);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});




module.exports = router;
