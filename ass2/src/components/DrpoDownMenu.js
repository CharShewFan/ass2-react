import IconButton from '@material-ui/core/IconButton/IconButton'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


 function DropDownMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div>
           <IconButton aria-haspopup="true" onClick={handleClick}>
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