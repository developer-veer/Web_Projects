import { useState } from "react";
import R_SideBar from "./RightSidebar";

const Teams = () => {


    const[teams , setTeams] = useState([
        {id:1 , teamOne :{ name :"Sindh" , score:256 , wickets:2 , overs:'(50 ov)' , dis:"Sindh give target of " } ,event:'Quaid e Azam Tropy ' ,
        teamTwo :{ name :"Balochistan" , score:150 , overs:30} } , 
       
        {id:2 , teamOne :{ name :"Southren Panjab" , score:210 , wickets:2 , overs:'(30 ov)', dis:"give target of "} , event:"Alama Iqbal Tropy",
        teamTwo :{ name :"Central Panjab" , score:'' , overs:''} } , 

        {id:3 , teamOne :{ name :"Southren Panjab" , score:210 , wickets:2 , overs:'(50 ov)' , dis:"give target of "} , event:"Alama Iqbal Tropy",
        teamTwo :{ name :"Central Panjab" , score:170 , overs:36} }
        
    ]);

    return ( 
        <div>
            <R_SideBar team ={teams} state ={setTeams}/>
        </div>
        
     );
}
 
export default Teams;