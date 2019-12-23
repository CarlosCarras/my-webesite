import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound/NotFound"
import NavBar from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./assets/Theme.css"


const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
