import React, { Suspense } from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./home/page/HomePage.jsx";
// import AboutPage from "./about/page/AboutPage.jsx";
// import ResumePage from "./resume/page/ResumePage.jsx";
// import ProjectsPage from "./projects/page/ProjectsPage.jsx";
// import ContactPage from "./contact/page/ContactPage.jsx";
import Footer from "./shared/Footer/Footer.jsx";
// import ProjectPage from "./projects/page/ProjectPage.jsx";
import "./App.css";
import NavBar from './shared/Navigation/NavBar.jsx';

const AboutPage = React.lazy(() => import("./about/page/AboutPage.jsx"));
const ResumePage = React.lazy(() => import("./resume/page/ResumePage.jsx"));
const ProjectsPage = React.lazy(() => import("./projects/page/ProjectsPage.jsx"));
const ContactPage = React.lazy(() => import("./contact/page/ContactPage.jsx"));
const ProjectPage = React.lazy(() => import("./projects/page/ProjectPage.jsx"));

function App() {

  return (
  <Router>
    <NavBar />
    <Switch>
      <Suspense fallback={<h1>Loading...</h1>}>
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
      <Route path="/projects/:projectId" >
        <ProjectPage />
      </Route>
      <Route  exact path="/" >
        <HomePage />
      </Route>
      <Route  exact path="/home" >
        <HomePage />
      </Route>
      {/* <Redirect to="/home" /> */}
      </Suspense>
    </Switch>
    <Footer className="footer" />
  </Router>  
  );
}

export default App;
