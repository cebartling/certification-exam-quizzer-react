import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer autoClose={6000}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
