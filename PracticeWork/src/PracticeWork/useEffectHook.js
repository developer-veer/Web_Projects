import { useEffect, useState } from "react";

const UseEffectHook = () => {


    const[windowwidth , setWindowwidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize' , handlresize)
    })

    return (  
        <div>
          
           



        </div>
    );
}
 
export default UseEffectHook;