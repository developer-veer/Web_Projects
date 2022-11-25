import '../CSSFiles/Menu.css';
import { FaRegMoon , FaBell , FaSearch , FaGripHorizontal} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div>
     
     <nav id='nav' style={{position:'fixed' , top:0 , zIndex:1}}>
       <Link to='/' style={{textDecoration:'none'}}>
        <h5 style={{width:'12rem' , marginTop:'0.5rem' , marginLeft:'3rem'} }>ESPN cricinfo</h5>
        </Link>
      {/* Live Score Link */}
      <div class="dropdown">
        <a class="dropbtn">Live Score</a>
        <div class="dropdown-content">
          <Link to='/result'>
          <a href=''>Results</a>
          </Link>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
      </div>

       {/* Series Link */}
      <div class="dropdown">
        <a class="dropbtn">Series</a>
        <div class="dropdown-content">
          <a href="#">T-20 world Cup</a>
          <a href="#">QEA Trophy</a>
          <a href="#">Marsh Cup</a>
          <a href="#">Future Series</a>
          
          <a href="#"></a>
          
        </div>
      </div>
       {/* Teams Link */}
      <div class="dropdown">
        <a class="dropbtn">Teams</a>
        <div class="dropdown-content">
          <a href="#">Paksitan</a>
          <a href="#">Afghanistan</a>
          <a href="#">India</a>
          <a href="#">Newzealand</a>
          <a href="#">Ausrtalia</a>
          <a href="#">SriLanka</a>
        </div>
      </div>
       {/* News Link */}
      <div class="dropdown">
        <a class="dropbtn">News</a>
        <div class="dropdown-content">
          <a href="#">News Home</a>
          <a href="#">Futre of ODI's</a>
          <a href="#">Racism</a>
          <a href="#">Technology in Cricket</a>
          <a href="#">Ball-tempering</a>
        </div>
      </div>
       {/* Feature Link */}
      <div class="dropdown">
        <a class="dropbtn">Feature</a>
        <div class="dropdown-content">
          <a href="#">Feature Home</a>
          <a href="#">Writer</a>
          <a href="#">Photo Galleries</a>
          <a href="#">Writer</a>
          <a href="#">Photo Galleries</a>
        </div>
      </div>
       {/* Videos Link */}
      <div class="dropdown">
        <a class="dropbtn">Videos</a>
        <div class="dropdown-content">
          <a href="#">T-20 Timeout</a>
          <a href="#">Matchday</a>
          <a href="#">Inerviews</a>
          <a href="#">Youtube</a>
          <a href="#">Match Analysis</a>

        </div>
      </div>
       {/*Stats Link */}
      <div class="dropdown">
        <a class="dropbtn">Stats</a>
        <div class="dropdown-content">
          <a href="#">Stats Home</a>
          <a href="#">IPL 2022</a>
          <a href="#">All Records</a>
          <a href="#">Grounds</a>
          <a href="#">Rankings</a>
          <a href="#">Players</a>
        </div>
      </div>
      {/*Icons Div */}
      <div id='icons-nav-div'>
      <div class="dropdown">
        <a class="dropbtn">Edition PK</a>
        <div class="dropdown-content">
        <a href="#">Globle</a>
          <a href="#">Africa</a>
          <a href="#">India</a>
          <a href="#">Newzealand</a>
          <a href="#">Ausrtalia</a>
          <a href="#">SriLanka</a>
          <a href="#"><strong>Paksitan</strong></a>
        </div>
      </div>
      <a href='#'>
      <h4><FaRegMoon/></h4>
      </a>

      <a href='#'>
      <h4><FaBell/></h4>
      </a>
      
      <a href='#'>
      <h4><FaGripHorizontal/></h4>
      </a>
      <a href='#'>
      <h4><FaSearch/></h4>
      </a>


      </div>
      
       
     </nav>

      
    </div>
  );
};

export default Menu;
