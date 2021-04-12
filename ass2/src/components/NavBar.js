import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
//import ButtonGroup from '@material-ui/core/ButtonGroup'
import React from 'react'
import DropDownMenu from './DrpoDownMenu'



function NavBar(){
    return(
        <div>
           
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">MockEvent.com</Typography>

                 
                    <Button>Home</Button>
                    <Button>Events</Button>
                   
                   <DropDownMenu/>
                    


                </Toolbar>
            </AppBar>

        </div>
    );
}

export default NavBar;
