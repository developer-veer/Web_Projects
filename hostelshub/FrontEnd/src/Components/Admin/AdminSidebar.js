import "../../StyledSheets/Admin/AdminSidebar.css";
import Button from '@mui/material/Button';
const AdminSidebar = () => {
  return (
    <section id="admin-sidebar">
      <section id="sidebar-logo">
        <img
          src="./img/Tanveer.jpg"
          class="rounded-circle mb-3"
          style={{width: '150px'}}
          alt="Avatar"
        />

        <h5 class="mb-2">
          <strong>Tanveer Ahmad</strong>
        </h5>
        <p class="text-muted">
          Software Engineer <span class="badge bg-primary">PRO</span>
        </p>
      </section>

    {/* Admin sidebar Buttons Section*/}
      <section id="sidebar-buttons-div">
        <div>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'11rem'}}>
         View
        </Button>
        </div>

        <div>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'11rem'}}>
         Remove
        </Button>
        </div>

        <div>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'11rem'}}>
         update
        </Button>
        </div>
        <div>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'11rem'}}>
         Add
        </Button>
        </div>

        <div>
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , width:'11rem'}}>
         Logout
        </Button>
        </div>
      </section>
    </section>
  );
};

export default AdminSidebar;
