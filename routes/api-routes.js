const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: { $sum: "$exercises.duration" }}
        }
    ])
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body} },
    )
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
})

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: { $sum: "$exercises.duration" }}
        }
    ])
    .sort({_id: -1})
    .limit(7)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
})

module.exports = router;