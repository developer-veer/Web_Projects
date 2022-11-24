import { useState } from "react";

function Onchange() {
   
   const[input , setData] = useState([
        
          {username : " "} ,
          {password : ""} ,
          {email : ""} ,
          {age : 0} ,
          {address : ""},
          {institueName : ""}
   ]);
   
   const handleChnage1 =(e) =>{
      
    setData(
           
        e.currentTarget.value
        )
        
   }

   const handlesubmit = (e) =>
   {
      e.preventDefault();
   }
   
    return ( 

        <div>
            <form onSubmit={handlesubmit}>
            UserName : <input type="text" value={input.username}  onChange={ handleChnage1 }/>
            <br/><br/>
            Password: <input type="password" value={input.password} onChange={handleChnage1}/>
            <br/><br/>
            Eamil : <input type="email" value={input.email} onChange={ handleChnage1 }/>
            <br/><br/>
            Age: <input type="number" value={input.age} onChange={handleChnage1}/>

            <br/><br/>

            address : <input type="address" value={input.address} onChange={ handleChnage1 }/>
            <br/><br/>
            Institute Name: <input type="text" value={input.companyName} onChange={handleChnage1}/>


            <button >Login</button>
            </form>
        </div>
     );
}

export default Onchange;