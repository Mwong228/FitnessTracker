const mongoose = require("mongoose")

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Enter the type of Excercise"
        },
        name: {
            type: String,
            required: "Enter the name of Excercise"
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout