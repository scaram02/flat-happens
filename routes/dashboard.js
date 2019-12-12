const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
const Week = require("../models/Week");
const mongoose = require("mongoose");
const moment = require("moment");
const User = require("../models/User");
const Task = require("../models/Task");

// GET the flat dashboard in the current week

router.get("/:week/:year", (req, res) => {
  const { year, week } = req.params;

  Week.find({ $and: [{ week: week }, { year: year }] }).then(weekWeWant => {
    // console.log(weekWeWant);
    Flat.find({ user: req.user._id })
      // Flat.find({ user: req.user._id })
      .populate("user")
      .then(flatArray => {
        console.log(flatArray);
        Task.find({
          $and: [{ flat: flatArray[0]._id }, { week: weekWeWant[0]._id }]
        })
          .populate({ path: "user week flat" })
          .then(allTasks => {
            // console.log(allTasks[0]);
            res.json({ tasks: allTasks, flat: flatArray[0] });
          });
      });
  });
});

router.get("/", (req, res) => {
  var currentWeek = moment().format("W") * 1;
  var currentYear = moment().format("Y") * 1;

  Week.find({ $and: [{ week: currentWeek }, { year: currentYear }] }).then(
    curWeek => {
      Flat.find({ user: req.user._id })
        .populate("user")
        .then(flatArray => {
          Task.find({
            $and: [{ flat: flatArray[0]._id }, { week: curWeek[0]._id }]
          })
            // .populate("week")
            .populate({ path: "user week flat" })
            //.populate("user")
            .then(allTasks => {
              console.log(allTasks[0]);

              res.json({ week: curWeek, tasks: allTasks, flat: flatArray[0] });
            });
        });
    }
  );
});

router.put("/remove/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Task.findByIdAndUpdate(id, { user: null, finished: false }, { new: true })
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/check/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  Task.findById(id).then(task => {
    console.log(task);
    const finished = task.finished;
    Task.findByIdAndUpdate(id, { finished: !finished }, { new: true })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
});

router.delete("/delete/:id", (req, res) => {
  console.log("trzing to delete a task");
  console.log(req.params.id);
  Task.findByIdAndDelete(req.params.id).then(response => {
    console.log(response);
    res.json({ message: "Sucessfully deleted" });
  });
});
// /api/dashboard/delete/${id}

// router.get("/:taskId", (req, res, next) => {
//   // id should be the id of the task which was onClicked to activate this put request
//   const id = req.params.taskId;
//   Task.findByIdAndDelete(id, { user: req.user._id }, { new: true })
//     .then(task => {
//       res.json(task);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// assign the task to the logged in user
router.get("/:taskId", (req, res, next) => {
  // id should be the id of the task which was onClicked to activate this put request
  const id = req.params.taskId;
  Task.findByIdAndUpdate(id, { user: req.user._id }, { new: true })
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Trying to create a new task using a TaskForm in the frontend

router.post("/", (req, res) => {
  var currentWeek = moment().format("W") * 1;
  var currentYear = moment().format("Y") * 1;
  const { name } = req.body;
  Week.find({ $and: [{ week: currentWeek }, { year: currentYear }] })
    .then(curWeek => {
      Flat.find({ user: { $in: [req.user.id] } }).then(flatArray => {
        Task.create({
          name: name,
          user: null,
          flat: flatArray[0]._id,
          week: curWeek[0]._id
        }).then(task => {
          res.json(task);
        });
      });
    })
    .catch(err => {
      res.status(500).json(err);
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

module.exports = router;
