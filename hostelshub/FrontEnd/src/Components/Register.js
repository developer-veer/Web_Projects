import "../StyledSheets/Login.css";
import "../StyledSheets/Register.css";
const Register = () => {
  return (
    <section className="login-div" id="login-div-reg">

      <div class="login-box" id="login-box-1">
        <h2 style={{ color: "rgba(255,165,64,255)", marginTop: "-1rem" , marginLeft:'15rem' }}>
          Register
        </h2>
        <form>

           {/* Full Name */}
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Full Name</label>
          </div>
             {/* City */}
          <div class="user-box">
            <input type="Email" name="" required="" />
            <label>City</label>
          </div>
           {/* Address */}
          <div class="user-box">
            <input type="Email" name="" required="" />
            <label>Address</label>
          </div>

          <a href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </a>
        </form>
      </div>
      {/* ----------------Second-loginbox; */}

      <div class="login-box" id="login-box-2">
        <h2 style={{ color: "rgba(255,165,64,255)", marginTop: "-1rem" , marginLeft:'-19rem' }}>
          Here!
        </h2>
        <form>
          {/* Email */}
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
           {/* Profession */}
          <div class="user-box">
            <input type="Email" name="" required="" />
            <label>Profession</label>
          </div>
           {/* Gender */}
          <div class="user-box">
            <input type="Email" name="" required="" />
            <label>Profession</label>
          </div>
        </form>
      </div>

    </section>
  );
};

export default Register;
