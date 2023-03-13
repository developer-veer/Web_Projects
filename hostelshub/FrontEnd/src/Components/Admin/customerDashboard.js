import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getHostelDataApi } from "../../Service/AddHostelApi";
import "../../StyledSheets/Admin/CustomerDashboard.css";
const CustomerDashboard = () => {
    
    const loc = useLocation();
    console.log(loc.state.Data);
    const[hostelData , setHostelData] = useState({});
     
    const fetch =async () => 
    {
        const outcome =await getHostelDataApi();
        setHostelData(outcome.data);
    }


    // useEffect(()=>{
    
    // fetch();

    // },[])
    return ( 
   
        <section id="customerDash">
         <h1>Welcome {loc.state.Data.fullName}</h1>
        </section>
     );
}
 
export default CustomerDashboard ;
