import { Link , useNavigate } from 'react-router-dom';
import '../form.css';
import '../btnLogin.css';
function Nav() {

      const navigate = useNavigate();

    return ( 


      <div>
      
        <nav class="navbar navbar-dark bg-dark fixed-top" id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" id="Brand-name">HostelHub.</a>
          
          
          <button class="contact-btn" onClick={()=> navigate('/contact')}>List</button>
         

        
          <button class="loginBtn" onClick={()=> navigate('/login')}>Login</button>
        
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
           
           <Link to="/">

            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">HostelHub.</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            </Link>
           
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active"  to="/" >Home</Link>
                </li>
                <li class="nav-item">
                 
              
                <Link class ="nav-link" to ="/SignUp">SignUp</Link>

                </li>
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a> */}
                  {/* <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" >Action</a></li>
                    <li><a class="dropdown-item" >Another action</a></li>
                    <li>
                      <hr class="dropdown-divider"/>
                    </li> */}
                    {/* <li><a class="dropdown-item" href="">Something else here</a></li> */}
                  {/* </ul>
                </li> */}
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      </div>

      



     );
}

export default Nav;