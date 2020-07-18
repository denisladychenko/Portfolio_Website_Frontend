import React, { Suspense } from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import HomePage from "./home/page/HomePage.jsx";
import ProjectsPage from "./projects/page/ProjectsPage.jsx";
import Footer from "./shared/Footer/Footer.jsx";
import NavBar from './shared/Navigation/NavBar.jsx';

const AboutPage = React.lazy(() => import("./about/page/AboutPage.jsx"));
const ResumePage = React.lazy(() => import("./resume/page/ResumePage.jsx"));
const ContactPage = React.lazy(() => import("./contact/page/ContactPage.jsx"));
const ProjectPage = React.lazy(() => import("./projects/page/ProjectPage.jsx"));

function App() {

  return (
  <Router>
    
    <Switch>
      <Suspense fallback={<img className="centered" src="/assets/images/cme-pl-ajax-loader.gif" alt="Loading..." />}>
      <NavBar />
      <Route exact path="/about" >
        <AboutPage />
      </Route>
      <Route exact path="/resume" >
        <ResumePage />
      </Route>
      <Route exact path="/projects" >
        <ProjectsPage />
      </Route>
      <Route exact path="/contact" >
        <ContactPage />
      </Route>
      <Route exact path="/projects/:projectId" >
        <ProjectPage />
      </Route>
      <Route  exact path="/" >
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" >
        <HomePage />
      </Route>
      <Redirect to="/home" />
      <Footer className="footer" />
      </Suspense>
    </Switch>
    
  </Router>  
  );
}

export default App;
