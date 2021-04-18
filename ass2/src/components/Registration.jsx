import axios from "axios";
import React from "react";
import {Button, TextField,Paper} from "@material-ui/core"
// eslint-disable-next-line no-unused-vars
import registerCSS from "../css/register.css"



export default class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname : "",
            email:"",
            password:""
        }
        this.updatePassword = this.updatePassword.bind(this)
    }

    //function

    updatePassword(event){
        this.setState(
            {password : event.target.value}
        )
    }

    //handle click
    async handleClick(){
        try{
            const response = await axios.post("user/register",{
                "firstname":this.state.firstname,
                "lastname":this.state.lastname,
                "email":this.state.email,
                "password":this.state.password
            })
            console.log(response)
        }catch(e){
            console.log(e)
        }

    }

    render(){
        return(
            <Paper elevation={8} className="paper">
            <div className="containers">
                <h3>registration</h3>
                <form>
                    
                    <div className="item">
                    <TextField placeholder="First Name" variant="outlined" type="text" id="firstname"  onChange={(e)=>{this.setState({firstname:e.target.value})}}/>
                    </div>
               
      

                    <div className="item">
                    <TextField placeholder="Last Name" variant="outlined" type="text" id="lastname"  onChange={(e)=>{this.setState({lastname:e.target.value})}}/>

                    </div>
                    <div className="item">
                    <TextField placeholder="E-mail" variant="outlined" type="text" id="userEmail"  onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <div className="item">
                    <TextField placeholder="Password" variant="outlined" type="password"  onChange={(e)=>{this.setState({password:e.target.value})}} />
                    </div>
                    
                </form>
                <Button  className="btn" variant="contained" color="primary" onClick={()=>{this.handleClick()}}>Submit</Button>
            </div>
            </Paper>
        )
    }
    
}


