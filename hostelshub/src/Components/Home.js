import '../StyledSheets/Home.css';
import Navbar from './HomePageComponents/Navbar';
import Search from './HomePageComponents/Search';

function Home() {
    return ( 
        <div className="grid-container">

        <div className="grid-item-1">
            
            
        </div>

        <div className="grid-item-2">

         <Search/>

        </div>
        <div className="grid-item-3">item-3</div>
        <div className="grid-item-4">item-4</div>
        <div className="grid-item-5">item-5</div>


        </div>
     );
}

export default Home;