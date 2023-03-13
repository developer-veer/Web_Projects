
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth, AuthGet } from "../Service/LoginApi";
import "../StyledSheets/Login.css";
const Login = () => {
  
   const refr = useRef(null);
const[wardenData , setWardenData] = useState([

  {userName :"" , Password:""}
]);

const[userData , setData] = useState([]);
const navigate = useNavigate();
  const handleData = e =>{
     
      setWardenData(
        {...wardenData , [e.target.name] : e.target.value}
      )
 }

 const handleLogin =async (e) =>
 {
    e.preventDefault();
    //console.log("test case");
    
    const result = await Auth(wardenData);
   // const result = await AuthGet(wardenData);
     console.log(result.data);
    setData(result.data);
   if(result.data !== null)
   {
    navigate("/customer/dashboard" , {state:{Data :userData}});
   }else{
       console.log("somthing wrong");
   }
  

   //console.log(userData);

 }

 // const navigate = useNavigate();

  useEffect(()=>{
       refr.current.focus();
  }, [])

  return (
    <section>
      <section className="login-div">
        
        <div className="login-box">
          <h2 style={{color: 'rgba(255,165,64,255)'}}>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="userName" ref={refr}  onChange={(e) => handleData(e)}/>
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="Password" required=""  onChange={(e) => handleData(e)}/>
              <label>Password</label>
            </div>


            <button
            style={{color:'orange'}}

            onClick={(e)=>handleLogin(e)}
            >
   
   
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
           
          </form>
        </div>
      </section>
    </section>
  );
};

export default Login;
