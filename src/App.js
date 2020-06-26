import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./home/page/HomePage.jsx";
import AboutPage from "./about/page/AboutPage.jsx";
import ResumePage from "./resume/page/ResumePage.jsx";
import ProjectsPage from "./projects/page/ProjectsPage.jsx";
import ContactPage from "./contact/page/ContactPage.jsx";
import Footer from "./shared/Footer/Footer.jsx";
import "./App.css";
import NavBar from './shared/Navigation/NavBar.jsx';

function App() {
  return (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/resume" exact>
        <ResumePage />
      </Route>
      <Route path="/projects" exact>
        <ProjectsPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
    <Footer className="footer" />
  </Router>  
  );
}

export default App;
