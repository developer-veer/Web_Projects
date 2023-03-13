import "../../StyledSheets/Admin/AdminSidebar.css";
import Button from '@mui/material/Button';
import { Link,  Outlet,  useNavigate } from "react-router-dom";
import AppBar from "./AppBar";
import { useEffect } from "react";
//import CustomerDashboard from "./customerDashboard";


const AdminSidebar = () => {

  

  const navigate = useNavigate();
  
 
  return (
    <>
    <AppBar/>
    <section id="admin-sidebar">
      <section id="sidebar-logo">
        <img
          src="./img/Tanveer.jpg"
          class="rounded-circle mb-3"
          style={{width: '150px'}}
          alt="Avatar"
        />

        <h5 class="mb-2">
          <strong>Tanveer Ahmad</strong>
        </h5>
        <p class="text-muted">
          Software Engineer <span class="badge bg-primary">PRO</span>
        </p>
      </section>

    {/* Admin sidebar Buttons Section*/}
      <section id="sidebar-buttons-div">
        <div>
        <Link to="/customer/dashboard" style={{textDecoration:'none'}}>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'8rem'}}>
         Dashboard
        </Button>
        </Link>
        </div>

       

      
        
        <div>
        <Link to="/customer/dashboard/AddHostel"  style={{textDecoration:'none'}}>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'8rem'}}>
         Add Hostel
        </Button>
        </Link>
        </div>

        <div>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'8rem'}}
              onClick={()=> navigate('/')}
              >
         Logout
        </Button>
        </div>
      </section>
    </section>

    {/* <CustomerDashboard/> */}
    <Outlet/>
    </>
  );
};

export default AdminSidebar;
