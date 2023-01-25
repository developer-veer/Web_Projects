import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { ImLocation } from 'react-icons/im';
import { FaBed , FaUserAlt } from 'react-icons/fa';
import { GiHotMeal } from 'react-icons/gi';
import  Footer from "./HomePageComponents/Footer";
import "../StyledSheets/Booking.css";
import MouseOverPopover from "./PopOver";
import Reserve from "./Model";
const Booking = () => {
  const loc = useLocation();

  return (
    <>
    <section id="Main-div">
      <section id="grid-sec-1">
        <div class="card" style={{ width: "20rem", height: "33rem" , backgroundColor:"rgba(255,165,64,255)"}}>
          <img src={loc.state.cardData.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-text">{loc.state.cardData.dis}</h6>
          </div>
        </div>
      </section>

      <section id="grid-sec-2">
        <div className="container">
          <div className="box">
            <img src={loc.state.cardData.rooms.room1} />
            <span></span>
          </div>

          <div className="box">
            <img src={loc.state.cardData.rooms.room2} />
            <span></span>
          </div>

          <div className="box">
            <img src={loc.state.cardData.rooms.room3} />
            <span></span>
          </div>

          <div className="box">
            <img src={loc.state.cardData.rooms.room4} />
            <span></span>
          </div>
        </div>
      </section>

      <section id="grid-sec-3">
       
        <div class="card" style={{backgroundColor:"rgba(255,165,64,255)"}}>
          <h5 class="card-header bg-black" style={{color:"rgba(255,165,64,255)"}}>About Hostel</h5>
          <div class="card-body">
            <GiHotMeal/>
            <h5 class="card-title">Breakfast Info</h5>
            <p class="card-text">
              <ul style={{color:"black"}}>
                <li style={{color:"black"}}>Vegetarian</li>
                <li style={{color:"black"}}>Halal</li>
                <li style={{color:"black"}}>Asian</li>
              </ul>
            </p>

            <FaBed/>
            <h5 class="card-title">Rooms Info</h5>

            <p class="card-text">
              <ul>
                <li style={{color:"black"}}>Comfortabel Rooms</li>
                <li style={{color:"black"}}>Feels Like a Home</li>
                <li style={{color:"black"}}>Attached Washroom</li>
              </ul>
            </p>
            <ImLocation/>
            <h5 class="card-title">Location</h5>
            <p>
                COMSAT'S Road , Mandian , Abbottabaad 
            </p>
           
            <Reserve/>

          </div>
        </div>
      
      </section>
        

    </section>

      <section id="table-show">

        <section className="table-row" style={{marginTop:"1rem"}}>

          <ul>
            <li>
              <h4 style={{marginTop:"3rem" , color:"rgb(32, 31, 28)"}}>One Seater</h4>
            </li>
          </ul>
          
          <div style={{marginTop:"3rem"}}>
          <FaUserAlt/>

          </div>
         
         <div style={{marginTop:"3rem"}}>
         <MouseOverPopover/>
         </div>
          

        </section>

        <section className="table-row">

        <ul>
            <li>
              <h4 style={{marginTop:"3rem" , color:"rgb(32, 31, 28)"}}>Two Seater</h4>
            </li>
          </ul>
          
          <div style={{marginTop:"3rem"}}>
          <FaUserAlt/>
          <FaUserAlt/>

          </div>
         

          <div style={{marginTop:"3rem"}}>
         <MouseOverPopover/>
         </div>

        </section>

        <section className="table-row">

        <ul>
            <li>
              <h4 style={{marginTop:"3rem" , color:"rgb(32, 31, 28)"}}>Three Seater</h4>
            </li>
          </ul>
          
          <div style={{marginTop:"3rem"}}>
          <FaUserAlt/>
          <FaUserAlt/>
          <FaUserAlt/>

          </div>
         

          <div style={{marginTop:"3rem"}}>
           <MouseOverPopover/>
         </div>

        </section>

      </section>

      <Footer/>

    </>
  );
};

export default Booking;
