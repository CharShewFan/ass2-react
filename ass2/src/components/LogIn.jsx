
import {Button, TextField} from "@material-ui/core"
import axios from "axios"
import React from 'react'
// eslint-disable-next-line no-unused-vars
import loginCss from "../css/login.css"










 class LogIn extends React.Component{
   
    constructor(props){
        super(props);
       this.handleGetInputValue = this.handleGetInputValue.bind(this)
       this.handlePassword = this.handlePassword.bind(this)
        this.state = {
            email:"",
            password:"",
            response:"",
            
        };
   
       
    }

    handleGetInputValue = function(event){
        this.setState({
            email : event.target.value,
            
        })
    };

    handlePassword = function(event){
        this.setState({
            password:event.target.value
        })
    };
     submit = async function(email,password){
        
         try{
             const data =  await axios.post("/user/login",{
                "email":this.state.email,
                "password":this.state.password
            })
            this.setState({respose : data})
         }catch(e){
             console.log(e)
         }

    };


    render() {
        return(
            <div className="container">

            <form className="loginForm" noValidate autoComplete="off">
                <div className="item">
                <TextField  placeholder="E-mail" type="email" required id="outlined-required"  variant="outlined" value={this.state.email}   onInput={this.handleGetInputValue}></TextField>
                </div>

                <div className="item">
               
                <TextField  placeholder="password" required id="outlined-required"  variant="outlined" type="password"  value={this.state.password}  onChange={()=>this.handlePassword()}></TextField>
                </div>
            </form>


            <div className="btnWrapper">            
                <Button onclick={()=>{this.submit()}} size="medium" variant="contained" color="primary" className="btn">Log In</Button>  
            </div>

            <div className="dataview">
                <h4>login Info:{this.state.response}</h4>
            </div>
   

            </div>

        )

    }   
}

export default LogIn
