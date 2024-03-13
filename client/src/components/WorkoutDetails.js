const WorkoutDetails = ({workout}) => {
    return ( 
        <div className="relative shadow-lg m-5  text-center">
            <h4 className="text-2xl">{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <span className="border-r-20 ">{workout.createdAt}</span>
        </div>
     );
}
 
export default WorkoutDetails;