const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
const Week = require("../models/Week");
const mongoose = require("mongoose");
const moment = require("moment");
const User = require("../models/User");
const Task = require("../models/Task");

// GET the flat dashboard in the current week

router.get("/", (req, res) => {
  // console.log("This is the real MVP", req.user);
  var currentWeek = moment().format("W") * 1;
  var currentYear = moment().format("Y") * 1;
  Week.find({ year: currentYear, week: currentWeek }).then(response => {
    Flat.find({ user: { $in: [req.user.id] } }).then(flatArray => {
      Task.find({ flat: flatArray[0]._id })
        .populate({ path: "flat", populate: { path: "user" } })
        .populate("week")
        .then(allTasks => {
          console.log(allTasks[0].flat);
          res.json(allTasks[0]);
        });
      // });
    });

    // User.findById(req.user._id).then(gotIt => {
    //   // console.log("USER? ", gotIt);
    //   const bananas = { currentWeek: response[0], rest: gotIt };
    //   // console.log(bananas);
    //   res.json(bananas);
    // });
  });
});

// router.get("/:week/:year", (req, res) => {
//   console.log("This is the real MVP");

//   Week.find({ year: req.params.year, week: req.params.week }).then(response => {
//     console.log(response);
//     User.findById(req.user._id)
//       .populate("flat")
//       .then(gotIt => {
//         console.log(response);
//         const bananas = { currentWeek: response[0], rest: gotIt };
//         res.json(bananas);
//       });
//   });
// });

// router.get("/:task", (req, res) => {
//   console.log("hi task");

//   Task.find({ task: req.params.task }).then(response => {
//     console.log(response);
//     User.findById(req.user._id)
//       .populate("flat")
//       .then(gotIt => {
//         console.log(response);
//         const bananas = { currentWeek: response[0], rest: gotIt };
//         res.json(bananas);
//       });
//   });
// });

// router.get("/:weekId", (req, res) => {
//   // return all flats
//   Week.findById({ weekId })
//     .populate("weeks")
//     .then(weekId => {
//       if (!weekId) {
//         res.status(404).json({ message: "week not found" });
//       } else res.json(flat);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// GET /api/flats/:id
// router.get("/:id", (req, res) => {
// return 1 flat w/ a given id
// const flatId = req.params.id;

// if (!mongoose.Types.ObjectId.isValid(flatId)) {
//   res.status(400).json({ message: "Flat ID is not valid" });
//   return;
// }

// Flat.findById(flatId)
//   .populate("tasks")
//   .then(flat => {
//     if (!flat) {
//       res.status(404).json({ message: "flat not found" });
//     } else res.json(flat);
//   })
//   .catch(err => {
//     res.status(500).json(err);
//   });
// });

// POST /api/flats
// router.post("/", (req, res) => {
//   // create 1 flat

//   Flat.create({
//     name: req.body.name,
//     weeklyTasks: req.body.weeklyTasks,
//     user: req.user.id
//   })
//     .then(flat => {
//       res.json(flat);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// PUT /api/flats/:id
router.put("/:id", (req, res) => {
  Flat.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      weeklyTasks: req.body.weeklyTasks
    },
    { new: true }
  )
    .then(flat => {
      res.json(flat);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE /api/flats/:id
// router.delete("/:id", (req, res) => {
//   Flat.findByIdAndDelete(req.params.id)
//     .then(flat => {
//       // Deletes all the documents in the Task collection where the value for the `_id` field is present in the `flat.tasks` array
//       return Task.deleteMany({ _id: { $in: flat.tasks } }).then(() =>
//         res.json({ message: "ok" })
//       );
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
