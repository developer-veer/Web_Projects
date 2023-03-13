import { Button } from "@mui/material";
import { useState } from "react";
import { FcHome } from "react-icons/fc";
import { addHostelApi } from "../../Service/AddHostelApi";
import "../../StyledSheets/Admin/AddHostel.css";
export const AddHostel = () => {
 
  const [addhostel, setAddHostel] = useState(
    {
    HostelName: "",
    NumOfRoom: "",
    Disc: "",
    Image:null,
    Address: "",
   }
  );

  const handleChange = (e) => {

    console.log(addhostel);

    if(e.target.name === 'Image')
    {
      setAddHostel({ ...addhostel, [e.target.name]: e.target.files[0] });
    }else{
      setAddHostel({ ...addhostel, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit =async (e) => {
     e.preventDefault();
   const formData = new FormData();

    formData.append('HostelName',addhostel.HostelName);
    formData.append('NumOfRoom',addhostel.NumOfRoom);
    formData.append('Disc',addhostel.Disc);
    formData.append('Image',addhostel.Image);
    formData.append('Address',addhostel.Address);

   

    await addHostelApi(formData);
     setAddHostel(

      {
        HostelName: "",
        NumOfRoom: "",
        Disc: "",
        Image:null,
        Address: "",
       }

     );



  };
  return (
    <>
      <form id="AddProForm">
        <div class="container contact">
          <div class="row" id="formContainer">
            <div class="col-md-3">
              <div class="contact-info">
                {/* <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              /> */}

                <FcHome />
                <h2>Add Your Hostel</h2>
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
                      placeholder="Enter Hostel Name"
                      name="HostelName"
                      value={addhostel.HostelName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                {/* Numner of rooms input Field */}
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email"></label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      id="rooms"
                      placeholder="Enter Total Number of Rooms"
                      name="NumOfRoom"
                      value={addhostel.NumOfRoom}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                {/* CNIC input Field */}
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email"></label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Discription"
                      name="Disc"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                <div class="mb-3" style={{ marginTop: "1rem" }}>
                  <label for="formFile" class="form-label">
                    Upload Hostel Image
                  </label>
                  <br/>
                  <input
                  
                    type="file"
                    id="formFile"
                    name="Image"
                  
                   onChange={(e) => handleChange(e)}
                  />
                </div>

                {/* Address input Field */}
                <div class="input-group" style={{ marginTop: "1rem" }}>
                  <span class="input-group-text">Address</span>
                  <textarea
                    type="text"
                    class="form-control"
                    aria-label="With textarea"
                    name="Address"
                    value={addhostel.Address}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
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
                  width: "10rem",
                  marginTop: "3rem",
                  marginLeft: "6rem",
                }}
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
