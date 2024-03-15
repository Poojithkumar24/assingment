import { useEffect, useState } from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');
                const json = await response.json();

                if (response.ok) {
                    setWorkouts(json);
                } else {
                    throw new Error('Failed to fetch workouts');
                }
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };
        fetchWorkouts();
    }, []);

    return ( 
            
           <div className='mt-20'>
             <div className="grid grid-cols-1 gap-100 pt-20 max-w-screen-sm mx-auto px-4 py-8">
            <div className="">
                {workouts !== null && workouts.map((workout) => (
                    <WorkoutDetails  key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
           </div>

    );
};
 
export default Home;
