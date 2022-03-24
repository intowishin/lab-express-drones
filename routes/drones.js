const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDrones) => {
      res.render("drones/list.hbs", {
        drones: allDrones,
      });
    })
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(newDrone => {
      res.redirect("/drones");
    })
    .catch(err => {
      console.log(err)
      res.render("/drones/create-form.hbs")
    });

});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
Drone.findById(req.params.id)
.then(editDrone => {
  res.render("drones/update-form.hbs", {drone: editDrone})
})
.catch(err => console.log(err))
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed }, {new: true})
  .then(() => {
    res.redirect("/drones")
  })
  .catch(err => {
    console.log(err)
    res.render("/drones/update-form.hbs")
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch(err => console.log(err))
});

module.exports = router;
