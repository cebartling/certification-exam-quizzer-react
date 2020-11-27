import React from 'react';
import './App.css';
import RoutesSwitch from "./RoutesSwitch";
import {BrowserRouter as Router, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
      </div>
      <RoutesSwitch />
    </Router>
  );
}

export default App;
