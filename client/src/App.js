import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound/NotFound"
import NavBar from "./components/Navbar/Navbar"
import Resume from "./components/Resume/Resume"
import ContactMe from "./components/ContactMe/ContactMe"
import Gallery from "./components/Gallery/Gallery"
import HowItsMade from "./components/HowItsMade/HowItsMade"
import FAQ from "./components/FAQ/FAQ"
import Projects from "./components/Projects/Projects"
import MountingBracket from "./components/Projects/ProjectListings/MountingBracket"
import PCBuild from "./components/Projects/ProjectListings/PCBuild"
import FourYearPlan from "./components/FourYearPlan/FourYearPlan"
import Footer from "./components/Footer/Footer"
import './assets/Theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = require('bootstrap');

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/"><Redirect to="/Home" /></Route>
        <Route exact path="/Resume" component={Resume}></Route>
        <Route exact path="/ContactMe" component={ContactMe}></Route>
        <Route exact path="/Gallery" component={Gallery}></Route>
        <Route exact path="/HowItsMade" component={HowItsMade}></Route>
        <Route exact path="/Projects" component={Projects}></Route>
        <Route exact path="/FAQ" component={FAQ}></Route>
        <Route exact path="/Projects/PCBuild" component={PCBuild}></Route>
        <Route exact path="/Projects/MountingBracket" component={MountingBracket}></Route>
        <Route exact path="/FourYearPlan" component={FourYearPlan}></Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
