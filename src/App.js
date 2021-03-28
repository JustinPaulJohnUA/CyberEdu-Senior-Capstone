import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation, useHistory } from 'react-router-dom';


/*COMPONENT IMPORTS */
import Home from './components/pages/HomePage/Home.js';
import LearnHome from './components/pages/LearnPages/LearnHome.js';
import LearnPhishing from './components/pages/LearnPages/LearnPhishing.js';
import ToolsPage from './components/pages/ToolsPage/ToolsPage.js';
import AssociationsPage from './components/pages/AssociationsPage/AssociationsPage.js';
import DataPage from './components/pages/DataPage/DataPage.js';
import LearnSocialEngineering from './components/pages/LearnPages/LearnSocialEngineering.js';
import LearnMalware from './components/pages/LearnPages/LearnMalware.js';
import AboutTeam from './components/pages/AboutTeamPage/AboutTeam.js';

/* STYLE IMPORTS */
import './App.css';

/*LIBRARY COMPONENT IMPORTS*/
import { AnimatePresence, motion } from "framer-motion";


/*
  This is the top-level component for this react application. 
  Routes for page navigation are defined here via react-router-dom
  Links to hit each route will be defined within the respective component
*/

function App() {
  const location = useLocation();
  return (
      <div className="App">
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/learn"><LearnHome /></Route>
              <Route exact path="/learn/phishing"><LearnPhishing /></Route>
              <Route exact path="/learn/social-engineering"><LearnSocialEngineering /></Route>
              <Route exact path="/learn/malware"><LearnMalware /></Route>
              <Route exact path="/tools"><ToolsPage /></Route>
              <Route exact path="/associations"><AssociationsPage /></Route>
              <Route exact path="/data"><DataPage /></Route>
              <Route exact path="/about-us"><AboutTeam /></Route>
            </Switch>
          </AnimatePresence>
      </div>
  );
}

export default App;
