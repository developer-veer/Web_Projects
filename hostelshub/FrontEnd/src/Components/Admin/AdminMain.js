import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";


const Main = () => {
    const loc = useLocation();
    const refrence = useRef(null);

    useEffect(()=>{
        refrence.current.style.color ="rgba(255,165,64,255)";
    })

    return ( 
   
        <section>
        <h1 ref={refrence} style={{color:'black'}}>
            Welocme {loc.state.user}
        </h1>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623}}>
         Light
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623}}>
         Dark
        </Button>
        </section>
     );
}
 
export default Main;
