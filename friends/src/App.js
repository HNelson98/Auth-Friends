import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path= "/login" component={Login} />
        </switch>

      </div>
    </Router>

  );
}

export default App;
