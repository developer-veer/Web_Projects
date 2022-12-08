import { useState } from "react";

export  const UseState = () =>
{
    const[count , setCount] = useState(()=>
    {
        console.log('run function');
        return 7 ;
    });
    const Minus = ()=>{

        setCount(prevCount => prevCount -1)
        setCount(prevCount => prevCount -1)
        
    }

    const Plus = ()=>{

        setCount(prevCount => prevCount +1)
        setCount(prevCount => prevCount + 1)
    }

   return(
    <div>
        <button onClick={()=> setCount(count+1)}>+</button>
        <span>{count}</span>
        <button onClick={()=> setCount(count-1)}>-</button>
    </div>
   );
}