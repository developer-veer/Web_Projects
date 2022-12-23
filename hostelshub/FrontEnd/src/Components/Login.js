
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyledSheets/Login.css";
const Login = () => {
  
const[username , setUserName] = useState('');
const[password , setPassword] = useState('');
const navigate = useNavigate();


  return (
    <section>
      <section className="login-div">
        
        <div className="login-box">
          <h2 style={{color: 'rgba(255,165,64,255)'}}>Login</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" required="" value={username} onChange={e =>setUserName(e.target.value)}/>
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" value={password} onChange={e =>setPassword(e.target.value)}/>
              <label>Password</label>
            </div>


            <a  onClick={()=> navigate('/admin' , {state:{user:username}})}>
   
   
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
           
          </form>
        </div>
      </section>
    </section>
  );
};

export default Login;
