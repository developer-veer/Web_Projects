import { useState } from "react";

function FunProduct() {
    
    const[quantity , setQuantity] = useState(10);
    const[Price , setPrice] = useState(200);



    return ( 

        <div>
        <div>
        <button onClick={()=>setQuantity(quantity+1)}>+</button>
        {quantity}
        <button onClick={()=>setQuantity(quantity-1)}>-</button>
       </div>

       <div>
     <button onClick={()=>setPrice(Price+200)}>+</button>
        {Price}
    <button onClick={()=>setPrice(Price-200)}>-</button>
    </div>
    </div>

     );
}

export default FunProduct;