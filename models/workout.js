const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema in mongoose
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: true
                },

                name: {
                    type: String,
                    trim: true,
                    required: true
                },

                duration: {
                    type: Number,
                    trim: true
                },

                distance: {
                    type: Number
                },

                weight: {
                    type: Number
                },

                reps: {
                    type: Number,
                },

                sets: {
                    type: Number
                },
            },
        ],
    },

    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }

    });

workoutSchema.virtual("totalDuration")
    .get(function () {
        return this.exercises.reduce((total, exercise) => {
            return total + exercise.duration;
        }, 0);
    });

    const Workout = mongoose.model("Workout", workoutSchema);

    module.exports = Workout;