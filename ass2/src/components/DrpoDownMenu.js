import IconButton from '@material-ui/core/IconButton/IconButton'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';



 function DropDownMenu() {
    //styling
    const useStyle = makeStyles({
      hanberg:{
        color:"white"
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
               <MenuItem onClick={handleClose}>Log In</MenuItem>
               <MenuItem onClick={handleClose}>User Info</MenuItem>
           </Menu>
       </div>           
   
    )
   
 }





 export default DropDownMenu;