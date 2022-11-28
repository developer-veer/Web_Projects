import '../../StyledSheets/HomePageCSS/Navbar.css';
import Button from '@mui/material/Button';
function Navbar() {
  
  return (
    <div>
  
    <div className="div-container">

        <div id="logo-div">
        <img src="./img/logo.png"/>
        </div>

        <div className="nav-btn-div">

         <li>Home</li>
         <li>Contact</li>
         <li>About</li>

        </div>

        {/* login and Register Buttons */}
        <div className="nav-btn-div" id='nav-btn-lo-Rg'>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623}}>
         Login
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623}}>
         Register
        </Button>
        </div>

    </div>


    </div>
  );
}

export default Navbar;
