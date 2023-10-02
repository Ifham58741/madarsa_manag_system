import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import StudentInformation from './pages/StudentInformation';
import Admission from './components/Admission';
import ProgramsAndFees from './components/ProgramsAndFees';
import AnnualReport from './components/AnnualReport';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student-information" component={StudentInformation} />
          <Route path="/admission" component={Admission} />
          <Route path="/programs-and-fees" component={ProgramsAndFees} />
          <Route path="/annual-report" component={AnnualReport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;