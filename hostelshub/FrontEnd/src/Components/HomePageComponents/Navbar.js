import '../../StyledSheets/HomePageCSS/Navbar.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Navbar() {
  
  return (
    <div>
  
    <div className="div-container">

        <div id="logo">
        <img src="./img/logo.png" alt='logo'/>
        </div>

        <div className="nav-btn-div">
        
        <Link to= '/' style={{textDecoration:'none'}}>
         <li>Home</li>
         </Link>
         <li>Contact</li>
         <li>About</li>
         <Link to='/admin' style={{textDecoration:'none'}}>
         <li>Administration</li>
         </Link>
        </div>

        {/* login and Register Buttons */}
        <div className="nav-btn-div" id='nav-btn-lo-Rg'>
        <Link to='/login' style={{textDecoration:'none'}}>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623}}>
         Login
        </Button>
        </Link>

        <Link to='/register' style={{textDecoration:'none'}}>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623}}>
         Register
        </Button>
        </Link>

        </div>

    </div>


    </div>
  );
}

export default Navbar;
