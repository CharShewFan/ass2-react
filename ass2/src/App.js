import Home from "./view/Home";
import NavBar from './components/NavBar'
import Event from './view/Event'
import User from './view/User'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App" style={{minWidth:"500px"}}>
            <NavBar />


            <div className="content">
              <Switch>
                  <Route path="/" exact>
                    <Home/>
                  </Route>

                  <Route path="/event" exact>
                    <Event/>
                  </Route>

                  <Route path="/user">
                    <User/>
                  </Route>
              </Switch>
            </div>

      </div>
    </Router>
  );
}

export default App;
