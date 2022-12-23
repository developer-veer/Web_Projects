import { useRef, useState } from "react";

const UseRefHook = () => {

    const input = useRef(null);
    const input2 = useRef(null);
    const[val , setVal] = useState('');

    function handleInput ()
    {
    
        console.log(input.current.value)
        
        input.current.focus();

    }

  
    return ( 
        <div>
            <input type='text' ref = {input}/>
            <input type='text' ref = {input2}/>
            <br/>
            <button onClick={handleInput}>Click me</button>
            <div>
                <h1>{val}</h1>
            </div>
        </div>
     );
}
 
export default UseRefHook;