import { Route, Routes} from "react-router-dom";
import { AddHostel } from "./Components/Admin/AddHostel";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import CustomerDashboard from "./Components/Admin/customerDashboard";
import Booking from "./Components/Booking";
import BookedRoom from "./Components/Customer/BookedRoom";
import CustomerAppBar from "./Components/Customer/Dashboard";
import ProductPage from "./Components/Customer/ProductPage";
import Home from "./Components/Home";
import Navbar from "./Components/HomePageComponents/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";




function App() {

  return (
    <div class='app'>
    
     {/* <Routes>
      <Route path="/signup" element={<Signup/>} />
    </Routes>  */}

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Admin" element={<CustomerAppBar/>}/>
        
        <Route path="/customer/dashboard"  element={<AdminSidebar/>}>
          
         <Route path="/customer/dashboard/" element={<CustomerDashboard/>}/>
         <Route path="/customer/dashboard/addHostel" element ={<AddHostel/>} />

        </Route>
        <Route path="/Wardens"  element={<ProductPage/>}/>
        <Route path="/Settings" element ={<BookedRoom/>}/>
        
      
        
        
        <Route path="/Booking" element={<Booking/>}/>
        
      </Routes>


     
    </div>
  );
}

export default App;
