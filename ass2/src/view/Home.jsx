
import Container from '@material-ui/core/Container';
//import NavBar from "../components/NavBar";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom"


function Home(){
    const useStyle = makeStyles({


        block1:{
            marginTop:"64px",
            width:"100%",
            height:"500px",
            backgroundColor:"primary",
            display:"flex",
            alignItems:"center"
        },

        block2:{
          
            width:"100%",
            height:"500px",
            backgroundColor:"#f50057",
            display:"flex",
            alignItems:"center"
        },

        btn1:{
            margin:"0 auto",
            display:"block",
            height:"40px"
        },

        btn2:{
            margin:"0 auto",
            display:"block",
            height:"40px"
        }
    })

    const classes = useStyle();

    return(
      
        <div className="Home">
          
            <Container className={classes.block1}>
                <Button variant="contained" color="secondary" className={classes.btn1}><Link to="/event">Events</Link></Button>
            </Container>

            <Container className={classes.block2}>
                <Button variant="contained" color="primary" className={classes.btn2}><Link to="/event">Join Us</Link></Button>
            </Container>
        </div>

       


    )
}

export default Home;