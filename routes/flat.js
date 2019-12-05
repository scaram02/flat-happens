const express = require("express");
const router = express.Router();
const Flat = require("../models/Flat");
// const Task = require("../models/Task");

// GET /api/flats
// router.get("/", (req, res) => {
//   // return all flats
//   Flat.find({})
//     .populate("flats") // flats???? was tasks
//     .then(flats => {
//       res.json(flats);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

const mongoose = require("mongoose");
// GET /api/flats/:id
router.get("/:id", (req, res) => {
  // return 1 flat w/ a given id
  const flatId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(flatId)) {
    res.status(400).json({ message: "Flat ID is not valid" });
    return;
  }

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
});

// POST /api/flats
router.post("/", (req, res) => {
  // create 1 flat

  Flat.create({
    name: req.body.name,
    weeklyTasks: req.body.weeklyTasks,
    user: req.user.id
  })
    .then(flat => {
      res.json(flat);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

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
router.delete("/:id", (req, res) => {
  Flat.findByIdAndDelete(req.params.id)
    .then(flat => {
      // Deletes all the documents in the Task collection where the value for the `_id` field is present in the `flat.tasks` array
      return Task.deleteMany({ _id: { $in: flat.tasks } }).then(() =>
        res.json({ message: "ok" })
      );
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
