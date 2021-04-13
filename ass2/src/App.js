import Home from "./view/Home";
import NavBar from './components/NavBar'
import Event from './view/Event'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
            <NavBar />


            <div className="content">
              <Switch>
                  <Route path="/" exact>
                    <Home/>
                  </Route>

                  <Route path="/event" exact>
                    <Event/>
                  </Route>
              </Switch>
            </div>

      </div>
    </Router>
  );
}

export default App;
