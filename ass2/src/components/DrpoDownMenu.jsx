import IconButton from '@material-ui/core/IconButton/IconButton'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';
import {Hidden,Button} from "@material-ui/core"


import {

  Link
} from "react-router-dom";



 function DropDownMenu() {
    //styling
    const useStyle = makeStyles({
      hanberg:{
        color:"white"
      },

      link:{
        color:"#000"
      }
    });
    
    const classes  = useStyle();



    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
      
        <div>
           <IconButton aria-haspopup="true" onClick={handleClick} className={classes.hanberg}>
               <MenuIcon></MenuIcon>
           </IconButton>
       
           <Menu
            id="drop-down"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
           >
             <Hidden mdUp>
             <MenuItem onClick={handleClose}><Link to="/" className={classes.link}>Home</Link></MenuItem>
             <MenuItem onClick={handleClose}><Link to="/event" className={classes.link}>Event</Link>   </MenuItem>
             </Hidden>
               <MenuItem onClick={handleClose}><Link to="/user" className={classes.link}>Log In</Link>   </MenuItem>
               <MenuItem onClick={handleClose}><Link to="/user" className={classes.link}>User Info</Link></MenuItem>
           </Menu>
       </div> 

              
   
    )
   
 }





 export default DropDownMenu;