const router = require("express").Router()
const Workout = require("../models/workout")

router.get('/api/workouts', (res,req) =>{

})


router.post("/api/workouts", (res,req) =>{
    Workout.create({})
    .then((mongoDB) => {
        res.json(mongoDB)
    })
    .catch((err) =>{
        res.json(err)
    })
})

module.exports = router