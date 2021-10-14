import React, { useContext } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

// Page imports
// ==========================================================================
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import BasicInfo from './pages/basicInfo/BasicInfo';
import MedicalInfo from './pages/medInfo/MedInfo';
// import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/basic-info">
            <BasicInfo />
          </Route>
          <Route path="/medical-info">
            <MedicalInfo />
          </Route>
          <Route>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
