import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import Button from '@material-ui/core/Button'
//import ButtonGroup from '@material-ui/core/ButtonGroup'
import React from 'react'
import DropDownMenu from './DrpoDownMenu'
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../view/Home';
import Event from '../view/Event'





function NavBar(){
    const useStyle = makeStyles({
        AppBar:{
            
            backgroundColor:"#263238",
            color:"#fff"
            
        },

        Toolbar:{
            display:"flex",
            justifyContent:"space-between"
        },

        btnGroup:{
            position:"relative",
            float:"right",
            display:"flex",
            alignItems:"center"

        },

        btn1:{
            marginRight:"20px",
            display:"block",
            color:"#fff"
    
        },
        btn2:{
            display:"block",
            marginRight:"20px",
            color:"#fff"
            
    
        },
    });
    
    const classes = useStyle();

    return(
       

       
        <div>
           
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.Toolbar}>
                    <Typography variant="h6"><Link to='/'>MockEvent.com</Link></Typography>
                    <div className={classes.btnGroup}>
                        <Button className={classes.btn1}><Link to="/">Home</Link></Button>
                        <Button className={classes.btn2}><Link to="/event">Event</Link> </Button>
                        <DropDownMenu/>
                    </div>
                </Toolbar>
            </AppBar>

        </div>


    );
}

export default NavBar;
