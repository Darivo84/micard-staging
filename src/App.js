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
            {/* <Home /> */}
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
            {/* {user ? <Redirect to="/basic-info" /> : <Login />} */}
          </Route>
          <Route path="/signup">
            <Signup />
            {/* {user ? <Redirect to="/basic-info" /> : <Signup />} */}
          </Route>
          <Route path="/basic-info">
            <BasicInfo />
            {/* {user ? <BasicInfo /> : <Signup />} */}
          </Route>
          <Route path="/medical-info">
            <MedicalInfo />
            {/* {user ? <MedicalInfo /> : <Login />} */}
          </Route>
          <Route>
          {/* <Route exact path="/profile/:email"> */}
            {/* {user ? <Profile /> : <Login />} */}
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
