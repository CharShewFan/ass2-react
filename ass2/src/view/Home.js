//import navBar from '../css/navBar.css'
import home from '../css/home.css'
import NavBar from "../components/NavBar";

function Home(){
    return(
        <div>
            <NavBar style={"margin-bottom:0px"} />
            <div className={"blockOne"}>
                <button className={"events"} type={"button"}><a href="/">Events</a></button>
            </div>

            <div className={"blockTwo"}>
                <button className={"joinUs"} ><a href="/">Join Us</a></button>
            </div>
        </div>

    )

}

export default Home;