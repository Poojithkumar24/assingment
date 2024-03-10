const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    

} = require("../controllers/workoutController")
const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.delete('/:id',(req,res)=>{
    res.json({msg:"DELETE a workout"})
})

router.patch('/:id',(req,res)=>{
    res.json({msg:"UPDATE a workout"})
})

router.post('/',createWorkout)

module.exports = router