import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import RoutesSwitch from './RoutesSwitch';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import fontawesome from '@fortawesome/fontawesome';
import {faEdit, faTrash, faPlus} from '@fortawesome/fontawesome-free-solid';
import initializeFirebaseApp from './FirebaseInitialization';
import {useRecoilState} from 'recoil';
import {userState} from './recoil/atoms';

fontawesome.library.add(faEdit, faTrash, faPlus);

function App() {
  // @ts-ignore
  const userRecoilStateArray = useRecoilState(userState);

  window.addEventListener('load', function () {
    initializeFirebaseApp(userRecoilStateArray[1]);
  });

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
