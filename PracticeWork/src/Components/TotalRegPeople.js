import { Link} from "react-router-dom";
 const TotalReg = () => {


    return ( 


        <div>
               
           <div id="totalReg-div-btns">

            <div id="btn-div">
            
            <Link to="/VRS">
            <button id="btn">View Registered Student's</button>
            </Link>
             
            <Link to='/Login'>
            <button id="btn">Registration at HostelHub</button>
            </Link>

            <Link to='/VRH'>
            <button id="btn">View Registered Warden's</button>
            </Link>
            </div>

            
            

           </div>

        </div>
     );
}
 
export default TotalReg;