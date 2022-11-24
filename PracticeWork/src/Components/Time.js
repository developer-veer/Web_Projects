import { useState } from "react";
import TimePlace from "./TimePlace";
const Time = () => {


    const[hours , setHours] = useState([
            
        {country : "Pakistn" , hour :1 , id:1},
        {country : "London" , hour :10 , id:2},
        {country : "Turkey" , hour :6 , id:3},
        {country : "Europe" , hour :7 , id:4}
    ]);


    return ( <div>


       <TimePlace hr={hours} setState={setHours}/>


    </div> );
}
 
export default Time;