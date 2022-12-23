import { Route, Routes} from "react-router-dom";
import Adminview from "./Components/Admin/AdminView";
import Booking from "./Components/Booking";
import Home from "./Components/Home";
//import ContextHook from "./Components/HomePageComponents/ContextHook";
import Navbar from "./Components/HomePageComponents/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
//import Student from "./Components/student";



function App() {
  return (
    <div class='app'>
    
    {/* <Routes>
      <Route path="/signup" element={<Student />} />
    </Routes> */}

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Adminview/>}/>
        <Route path="/admin" element={<Booking/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
