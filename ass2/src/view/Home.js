import HomeStyle from '../css/home.css'
import Container from '@material-ui/core/Container';
import NavBar from "../components/NavBar";
import Button from '@material-ui/core/Button'

function Home(){
    return(
        <div className="Home">
            <NavBar/>
            <Container className="block-1">
                <Button variant="contained" color="secondary">Events</Button>
            </Container>

            <Container className="block-2"></Container>
        </div>

    )

}

export default Home;