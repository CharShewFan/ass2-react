import TextField from "@material-ui/core/TextField"
import Input from "@material-ui/core/Input"
import {Button} from "@material-ui/core"
import axios from "axios"
import  Container from "@material-ui/core/Container"
import React, {useState} from 'react'



 class LogIn extends React.Component{
    constructor(props){
        super(props);
       this.handleGetInputValue = this.handleGetInputValue.bind(this)
       this.handlePassword = this.handlePassword.bind(this)
       this.testing = this.testing.bind(this)
        this.state = {
            email:"",
            password:"",
            testing:""
        };
   
       
    }

    handleGetInputValue = function(event){
        this.setState({
            email : event.target.value,
            
        })
    }

    handlePassword = function(event){
        this.setState({
            password:event.target.value
        })
    }
     submit = async function(email,password){
        
         try{
             const respose =  await axios.post("/user/login",{
                "email":this.state.email,
                "password":this.state.password
            })
            console.log(respose)
         }catch(e){
             console.log(e)
         }

    };

    testing = function(e){
        if(e) e.preventDefault();
        const valueTemp = this.inputValue.value;
        console.log(valueTemp, '------valueTemp');
    }

    render() {
        return(
            <Container className="container">
            <form className="loginForm" noValidate autoComplete="off">
                <label htmlFor="email">E-mail:</label>
                <Input placeholder="E-mail" type="email"  value={this.state.email} id="email"  onInput={this.handleGetInputValue}></Input>
                <label htmlFor="password">Password:</label>
                <Input placeholder="Password" type="password"  value={this.state.password}  onChange={()=>this.handlePassword()}></Input>
                <Input placeholder="testing"  onChange={(event)=>{this.setState({testing:event.target.value})}}></Input>
            </form>
            <Button onclick={this.submit.bind(this.email,this.password)} size="medium" variant="contained" color="primary">Submit</Button>  
   

            </Container>

        )

    }   
}

export default LogIn

//ref={(p)=>{this.password = p}} 