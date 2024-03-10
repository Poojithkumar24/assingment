const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout

} = require("../controllers/workoutController")
const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

router.post('/',createWorkout)

module.exports = router