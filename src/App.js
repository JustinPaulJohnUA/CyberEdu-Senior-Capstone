import './components/Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*COMPONENT IMPORTS */
import Home from './components/Home.js';
import LearnHome from './components/pages/LearnPages/LearnHome.js';
import LearnPhishing from './components/pages/LearnPages/LearnPhishing.js';
import ToolsPage from './components/ToolsPage.js';
import AssociationsPage from './components/AssociationsPage.js';
import DataPage from './components/DataPage.js';
import LearnSocialEngineering from './components/pages/LearnPages/LearnSocialEngineering.js';
import LearnMalware from './components/pages/LearnPages/LearnMalware.js';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/learn"><LearnHome /></Route>
          <Route exact path="/learn/phishing"><LearnPhishing /></Route>
          <Route exact path="/learn/social-engineering"><LearnSocialEngineering /></Route>
          <Route exact path="/learn/malware"><LearnMalware /></Route>
          <Route exact path="/tools"><ToolsPage /></Route>
          <Route exact path="/associations"><AssociationsPage /></Route>
          <Route exact path="/data"><DataPage /></Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
