import { useEffect,  useState } from "react";
import {FaRegistered} from 'react-icons/fa';
import "../StyledSheets/Login.css";
import "../StyledSheets/bookingForm.css";
import { register } from "../Service/regApi";

import { Button } from "@mui/material";

const Register = () => {


   const[ErrorMesg , setErrorMesg] = useState("");
  const [regData, setRegData] = useState(
    { fullname: "", email: "", Password:"", confirm_Password:"",  Address: "", Age: "" }
  );

  
  //const[fullName , email] = regData;

  const handleChange = (e) => {

    
    setRegData({ ...regData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    

    if(regData.Password.match(regData.confirm_Password))
    {
   
     const  result =    await register(regData);
       setErrorMesg(result.data);
   
      }else{
      setErrorMesg("The Password is Not Matched..");
    }

    e.preventDefault();
  
    
    
    setRegData( 
      { fullname: "", email: "", CNIC: "",  Address: "", Age: "" }
    );
    
  };

  useEffect(()=>{
    
     console.log("Somthing is change..");
  },[]);

  return (
    <form id="contactbody">
      <div class="container contact">
        <div class="row" id="bookingform-container">
          <div class="col-md-3">
            <div class="contact-info">
              {/* <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              /> */}
              <FaRegistered/>

              <h2>Register with us</h2>
              <h4>To become part of Hostelhub</h4>
            </div>
          </div>
          <div class="col-md-9">
            <div class="contact-form">
              <div class="form-group">

                {/* Fullname input Field */}
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter Full Name"
                    name="fullname"
                    value={regData.fullname}
                    onChange={(e) =>  handleChange(e)}
                  />
                </div>
              </div>

               {/* email input Field */}
              <div class="form-group">
                <label class="control-label col-sm-2" for="email"></label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={regData.email}
                    onChange={ (e) =>  handleChange(e)}
                  />
                </div>
              </div>

             
              

              <div class="form-group" style={{ marginTop: "1rem" }}>
                {/* <label class="control-label row-sm-2" for="comment">
                  Select Room Type :
                </label> */}

                {/* Age Input */}
                <div class="form-group">
                <label class="control-label col-sm-2" for="email"></label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    placeholder="Enter Age here!"
                    name="Age"
                    value={regData.Age}
                    onChange={ (e) =>  handleChange(e)}
                  />
                </div>
              </div>
              </div>

              {/* Password input Field */}
              <div class="form-group">
                <label class="control-label col-sm-2" for="email"></label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="phone"
                    placeholder="password"
                    name="Password"
                    value={regData.Password}
                    onChange={ (e) =>  handleChange(e)}
                  />
                </div>
              </div>

              {/*Confirm Password input Field */}
              <div class="form-group">
                <label class="control-label col-sm-2" for="email"></label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="phone"
                    placeholder="Confirm Password"
                    name="confirm_Password"
                    value={regData.confirm_Password}
                    onChange={ (e) =>  handleChange(e)}
                  />
                </div>
              </div>



                
               {/* Address input Field */}
              <div class="input-group" style={{ marginTop: "1rem" }}>
                <span class="input-group-text">Address</span>
                <textarea
                  type = "text"
                  class="form-control"
                  aria-label="With textarea"
                  name="Address"
                  placeholder={ErrorMesg}
                  // value={regData.Address}
                  onChange={(e) =>  handleChange(e)}
                ></textarea>
              </div>
            </div>

            <div class="modal-dialog modal-dialog-centered">
                   {ErrorMesg}
             </div>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(255,165,64,255)",
                color: "black",
                "&:hover": {
                  backgroundColor: "black",
                  color: "rgba(255,165,64,255)",
                },
                fontStyle: "oblique",
                fontWeight: 623,
				        width:'10rem',
                marginTop:'3rem',
                marginLeft:'6rem'
              }} 
			  
             
             onClick={(e) =>handleSubmit(e)}
           
             type="submit"
             
            >
              Register
           	    </Button>


          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
