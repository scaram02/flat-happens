const express = require("express");
const router = express.Router();

/* GET profile page */
router.get("/profile/:id", (req, res, next) => {
  console.log("profile route");
});

module.exports = router;
