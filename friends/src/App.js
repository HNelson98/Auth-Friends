import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './Components/Login'
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/ProtectedRoute';
import AddFriend from './Components/FriendForm';

function App() {
  return (
    <Router>
      <div className="App">
      <Link to='/add'>Add Friend</Link>
      <br/>
      <Link to='/protected'>Friends</Link>
        <Switch>
          <PrivateRoute exact path= '/add' component= {AddFriend} />
          <PrivateRoute exact path= '/protected' component={FriendsList} />
          <Route path= "/login" component={Login} />
          <Route component={Login} />
        </Switch>
        

      </div>
    </Router>

  );
}

export default App;
