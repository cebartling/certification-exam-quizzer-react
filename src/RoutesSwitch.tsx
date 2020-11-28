import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import PropTypes from "prop-types";
import WelcomeView from './views/WelcomeView';
import FrontDoorView from './views/FrontDoorView';
import CertificationExamView from "./views/CertificationExamView";


function RoutesSwitch() {

  return (
    <Switch>
      <Route exact path="/">
        <FrontDoorView/>
      </Route>
      <Route path="/welcome">
        <WelcomeView/>
      </Route>
      <Route path="/certification-exam/:id">
        <CertificationExamView/>
      </Route>
    </Switch>
  );
};

RoutesSwitch.propTypes = {};

export default RoutesSwitch;
