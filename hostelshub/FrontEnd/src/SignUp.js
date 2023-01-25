import { useState } from "react";
import { signUp } from "./Service/regApi";

const Signup = () => {

    const[user , setUser] =useState([
        {firstName:"" , lastName:""}
    ]); 

    const handleChange = e =>{
        setUser(

            {...user , [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = async e => {

        e.preventDefault();
       await signUp(user);
    }

    return ( 
        <div style={{width:"30rem" , marginTop:"6rem"}}>

    <div class="row g-3">
     
     <div class="col">
        <input type="text" class="form-control" placeholder="First name" aria-label="First name" name="firstName" onChange={e => handleChange(e)}/>
     </div>
  
    <div class="col">
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" name="lastName" onChange={e => handleChange(e)}/>
    </div>

    
    <div class="col-12" >
        <button type="submit" class="btn btn-primary" onClick={e => handleSubmit(e)}>Send</button>
    </div>

   
    </div>

        </div>
     );
}
 
export default Signup;