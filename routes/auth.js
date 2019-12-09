const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      return bcryptjs
        .genSalt()
        .then(salt => {
          return bcryptjs.hash(password, salt);
        })
        .then(hash => {
          return User.create({ username: username, password: hash });
        })
        .then(newUser => {
          // passport login
          req.login(newUser, err => {
            if (err) res.status(500).json(err);
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


router.post("/signup/:flatId", (req, res) => {
  const { username, password } = req.body;
  const flatId = req.params._id;

  console.log("IS this the flat ID we want?", flatId)

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      return bcryptjs
        .genSalt()
        .then(salt => {
          return bcryptjs.hash(password, salt);
        })
        .then(hash => {
          return User.create({ username: username, password: hash });
        })
        .then(newUser => {
          // passport login
          req.login(newUser, err => {
            if (err) res.status(500).json(err);
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });


    // we would like to find the flat in our DB by using the flatId from the URL and push the signedup user into the user array
    Flat.findByIdAndUpdate(
      req.params.id,
      // description: req.body.description,
      { user: [req.user._id] }
      // { "$push": { 'user': req.user._id } } ?? maybe this could WORK?
    )
      .then(flat => {
        res.json(flat);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


const passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      // no user found with username or password didn't match
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // passport req.login
    req.login(user, err => {
      if (err) res.status(500).json(err);
      res.json(user);
    });
  })(req, res, next);
});

router.delete("/logout", (req, res) => {
  // passport logout function
  req.logout();
  res.json({ message: "Successful logout" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
