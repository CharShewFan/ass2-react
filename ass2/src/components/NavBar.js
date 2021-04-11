import navBar from '../css/navBar.css'

function NavBar(){
    return(
        <div className="navigation">
            <nav>
                <h4 className="brandName">MockFinda</h4>
                <div className={"linkBox"}>
                    <a href="/" >Home</a>
                    <a href="/" >Events</a>
                    <div className="avatar"/>
                    <a href="/" >LogIn</a>
                </div>

            </nav>

        </div>
       
    )

}

export default NavBar;