import TextField from "@material-ui/core/TextField"
import Input from "@material-ui/core/Input"
import {Button} from "@material-ui/core"
import axios from "axios"
import  Container from "@material-ui/core/Container"
import React, {useState} from 'react'



 class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
        this.submit = this.submit.bind(this);
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

    render() {
        return(
            <Container className="container">
            <form className="loginForm" noValidate autoComplete="off">
                <label htmlFor="email">E-mail:</label>
                <Input placeholder="E-mail" type="email" value={this.setState.email} id="email"></Input>
                <label htmlFor="password">Password:</label>
                <Input placeholder="Password" type="password" value={this.setState.password}></Input>
            </form>
            <Button onclick={this.submit()} size="medium" variant="contained" color="primary">Submit</Button>  
            <div>{this.state.email}</div>
            <div>{this.state.password}</div>
            </Container>

        )

    }   
}

export default LogIn