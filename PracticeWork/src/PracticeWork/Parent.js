import { useState } from "react"
import { Child } from "./Child"
 export const Parent = () =>
{
    const[age , setAge] = useState(10);
    const[gender , setGender] = useState('Custom');


   return(
       <Child Age={age} Gen = {gender}/>
   );

}
