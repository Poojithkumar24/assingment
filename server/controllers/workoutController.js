const Workout = require('../models/workoutModel')

// get all workouts

// get single workout

// create  a workout

const createWorkOut = async(req,res) =>{
    const {title, load,reps} = req.body;
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a workout 

//update a workout
