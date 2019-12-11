const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  // return 1 flat w/ a given id
  console.log("this is the user info", req.user);
  Flat.find({ user: { $in: [req.user.id] } }).then(flat => {
    console.log("this is the flat info:", flat);
    res.json(flat);
  });
});

module.exports = router;
