
import Footer from "./Footer";
import L_SideBar from "./LeftSidebar";
import MainSec from "./Main";
import Menu from "./Menu";
import Teams from "./Teams";

const Home = () => {
    return ( 
        <div>

                 

        <div style={{height:"80%"}}>
            <Menu/>
            <MainSec/>
            <L_SideBar/>
            <Teams/> 
        </div>

        <div style={{height:"20%" , position:'absolute'}}>
          <Footer/>
        </div>

        </div>
     );
}
 
export default Home;