
import Footer from "./Footer";
import LeftSideBar from "./LeftSidebar";
import MainSec from "./Main";
import Menu from "./Menu";
import RightSideBar from "./RightSidebar";
import Teams from "./Teams";

const Home = () => {
    return ( 
        <div>

                 

        <div style={{height:"70%"}}>
            <Menu/>
            <MainSec/>
          
            <Teams/> 
        </div>

        <div style={{height:"" , position:'absolute'}}>
          <Footer/>
        </div>

        </div>
     );
}
 
export default Home;