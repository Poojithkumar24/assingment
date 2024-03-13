import { useState } from 'react'

const WorkoutForm = () => {

    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const workout = {title,load,reps}

        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            throw Error(json.error)
        }
        else{
            setError(null)
            setLoad('')
            setReps('')
            setTitle('')
            console.log('new workout added',json)
        }
    }
    
    return ( 
        <div className='h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='relative shadow-lg  text-center'>
            <h3 className=''>Add a new Workout</h3>
            <label className='text-2xl font-semibold bg-black text-white'>Excersice Title</label>
            <input 
                className='bg-gray-100 text-black'
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />
            <label className='text-2xl font-semibold  bg-black text-white'>Load (in Kg)</label>
            <input 
                className='bg-gray-100 text-black'
                type="number"
                onChange={(e)=>setLoad(e.target.value)}
                value={load}
            />
            <label className='text-2xl font-semibold  bg-black text-white'>Reps</label>
            <input
                className='bg-gray-100 text-black' 
                type="number"
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
            />

            <button>ADD</button>
            </form>
        </div>
     )
}
 
export default WorkoutForm;