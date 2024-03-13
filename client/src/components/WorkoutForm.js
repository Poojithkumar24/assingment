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
        <div className='flex justify-center items-center h-screen w-full bg-gradient-to-br from-stone-600 to-slate-600'>
            <form onSubmit={handleSubmit} className='w-1/3  bg-stone-300 shadow- p-8 m-4 rounded-3xl shadow-2xl'>
            <h3 className='block w-full text-center text-gray-800 text-2xl font-bold mb-6'>Add a new Workout</h3>
            <div className='flex flex-col mb-4'>
                <label className='mb-2 font-bold text-lg text-gray-900'>Excersice Title</label>
                <input 
                    className='border py-2 px-3 text-grey-800  bg-gray-100 rounded-3xl'
                    type="text"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label className='mb-2 font-bold text-lg text-gray-900'>Load (kg)</label>
                <input 
                    className='border py-2 px-3 text-grey-800  bg-gray-100 rounded-3xl'
                    type="text"
                    onChange={(e)=>setLoad(e.target.value)}
                    value={load}
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label className='mb-2 font-bold text-lg text-gray-900'>Reps</label>
                <input 
                    className='border py-2 px-3 text-grey-800  bg-gray-100 rounded-3xl'
                    type="text"
                    onChange={(e)=>setReps(e.target.value)}
                    value={reps}
                />
            </div>

            <button className='block bg-black hover:bg-stone-700 text-white uppercase mt-10 mx-auto p-3 rounded-3xl'>Add Workout</button>
            {error && <div>{error}</div>}
            </form>
        </div>
     )
}
 
export default WorkoutForm;