import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
//import ListItemText from '@mui/material/ListItemText';
//import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import BookingForm from './BookingForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Reserve() {

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} 
      sx={{backgroundColor: "black",
                color: "rgba(255,165,64,255)",  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },}}>
        Reserve
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{backgroundColor:'darkgray'}}
      >
        <AppBar sx={{ position: 'relative' , backgroundColor:'rgba(255,165,64,255)'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
        
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 , color:'black'}} variant="h6" component="div">
              Booking
            </Typography>
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
              }} 
			  
             onClick={handleClose}
            >
              Reserve
           	    </Button>
          </Toolbar>
        </AppBar>
        <List>

          <BookingForm/>

          {/* <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem> */}

        </List>
      </Dialog>
    </div>
  );
}
