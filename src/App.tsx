import React from 'react';
import './App.scss';
import RoutesSwitch from './RoutesSwitch';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <RoutesSwitch/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
