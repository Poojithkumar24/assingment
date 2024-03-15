import Login from "./pages/Login";
import Home from "./pages/Home";
import WorkoutForm from "./components/WorkoutForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
