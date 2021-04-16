import Login from "../components/LogIn"
import Registration from "../components/Registration"

function User(){
    return(
        <div>
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