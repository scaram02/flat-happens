const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");

/* GET home page */
router.get("/create-flat", (req, res, next) => {
  console.log("create flat route");
});

module.exports = router;
