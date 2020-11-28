import React from 'react';
import './App.scss';
import RoutesSwitch from "./RoutesSwitch";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <RoutesSwitch />
    </Router>
  );
}

export default App;
