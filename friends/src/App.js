import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login'
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path= '/protected' component={FriendsList} />
          <Route path= "/login" component={Login} />
          <Route component={Login} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
