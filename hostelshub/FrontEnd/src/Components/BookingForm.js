import "../StyledSheets/bookingForm.css";

function BookingForm() {




  return (
    <div id="contactbody">
      <div class="container contact" >
        <div class="row" id="bookingform-container">
          <div class="col-md-3">
            <div class="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              />
              <h2>Stay With Us</h2>
              <h4>We would love to hear from you</h4>
            </div>
          </div>
          <div class="col-md-9">
            <div class="contact-form">
              <div class="form-group">
               
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter Full Name"
                    name="fname"
                  />
                </div>
              </div>
             
              <div class="form-group">
                <label class="control-label col-sm-2" for="email">
				
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
              </div>

			  <div class="form-group">
                <label class="control-label col-sm-2" for="email">
				
                </label>
                <div class="col-sm-10">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    placeholder="Your Whatsapp Number"
                    name="email"
                  />
                </div>
              </div>
			  

              <div class="form-group" style={{marginTop:'1rem'}}>
                {/* <label class="control-label row-sm-2" for="comment">
                  Select Room Type :
                </label> */}
                

                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  					<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
  					<label class="btn btn-outline-primary" for="btnradio1" 
				  >One Seater</label>

  					<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
 					<label class="btn btn-outline-primary" for="btnradio2">Two Seater</label>

  					<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  					<label class="btn btn-outline-primary" for="btnradio3">Three Seater</label>
				</div>

              </div>

			  {/* Reserve button */}
			  <div class="input-group" style={{marginTop:'1rem'}}>
  				<span class="input-group-text">Address</span>
  				<textarea class="form-control" aria-label="With textarea"></textarea>
			 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
