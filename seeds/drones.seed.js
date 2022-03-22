// Iteration #1
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    Drone.create(drones)
      .then((newDrones) => {
        console.log(`${newDrones.length} have been created.`);
      })

      .catch((err) => console.log(err));

    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })

  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const drones = [
  {
    name: "DJI Phantom",
    propellers: 4,
    maxSpeed: 40,
  },
  {
    name: "DJI Mavic 3",
    propellers: 4,
    maxSpeed: 45,
  },
  {
    name: "DJI Mini 2",
    propellers: 4,
    maxSpeed: 35,
  },
];
