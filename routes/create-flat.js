const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
// const User = require("../models/User");
const Task = require("../models/Task");
const Week = require("../models/Week");

// POST /api/flats
router.post("/", (req, res) => {
  const { weeklyTasks } = req.body;
  // create 1 flat
  console.log("helloooooo", req.body);
  Flat.create({
    name: req.body.name,
    // description: req.body.description,
    user: [req.user._id]
  }).then(flat => {
    console.log("what is inside flat?", flat);
    res.json(flat);
    Week.find({}).then(allWeeks => {
      // console.log("All WEEKS", allWeeks);
      // console.log(allWeeks);
      allWeeks.forEach(week => {
        weeklyTasks.forEach(task => {
          console.log("LETS LOOK AT IT AGAIN, I DONT UNDERSTAND", task);
          Task.create({
            name: task,
            week: week._id,
            flat: flat._id,
            user: null
          }).then(
            // ANDRE: Is this how we are supposed to send tasks to the frontend?
            tasks => {
              console.log("Sucess! Task created");
            }
          );
        });
      });
      console.log("now fo realzzz");
    });
  });
});

module.exports = router;
