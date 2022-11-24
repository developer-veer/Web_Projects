import { useState } from "react";
import File_2 from "./File_2";
//import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";

const File_1 = () => {

   // const navigate = useNavigate();
   
    const [regStud, setRegStud] = useState([
    
        { id: 1, name: "Bacha khan", age: 81, roomNo: 105, img: "./img/bacha.jpg" },
        { id: 2, name: "Tanveer", age: 23, roomNo: 108, img: "./img/Tanveer.jpg" },
        { id: 3, name: "Kashif", age: 33, roomNo: 109, img: "./img/Tanveer.jpg" },
        { id: 4, name: "shabbir", age: 17, roomNo: 110, img: "./img/shabbir.jpg" },
      ]);
      
    return ( 
    
        
        <File_2 reg ={regStud} setState ={setRegStud}/>
         
     );
}
 
export default File_1;