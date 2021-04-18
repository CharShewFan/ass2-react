import axios from "axios";
import React from "react"



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
            <div>
                registration
                <form>
                    <label htmlFor="userName" ></label><input type="text" id="userName" onChange={(e)=>{this.setState({firstname:e.target.value})}}/>
                    <label htmlFor="lastname"></label><input type="text" id="lastname" onChange={(e)=>{this.setState({lastname:e.target.value})}}/>
                    <label htmlFor="userEmail" ></label><input type="text" id="userEmail" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    <label htmlFor="pssword"></label><inpit type="password" onChange={(e)=>{this.setState({password:e.target.value})}}></inpit>
                    <input type="button" onClick={()=>{this.handleClick()}}/>
                </form>
            </div>
        )
    }
    
}


