import { useEffect, useRef, useState } from "react";

export  const UseState = () =>
{
   const ref = useRef(0);
    const Minus = ()=>{

       
        
        
    }

    const Plus = ()=>{
        
        ref.current = ref.current+ 1;
        console.log(ref.current);
    }

    useEffect(()=>
    {
        console.log("i rendered...")
    })

   return(
    <div>
        <button onClick={Plus}>+</button>
        <span>{}</span>
        <button onClick={Minus}>-</button>
    </div>
   );
}