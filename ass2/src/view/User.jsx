import Login from "../components/LogIn"
import Registration from "../components/Registration"

function User(){
    return(
        <div className="userBox" style={{marginTop:"150px"}} >
            <div className="registration">
                <Registration/>
            </div>
            
            <div className="logIn" style={{backgroudColor:"blue"}}>
                <Login />
            </div>
        </div>
    )
}

export default User