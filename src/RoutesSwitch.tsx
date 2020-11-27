import React from 'react';
// import PropTypes from "prop-types";
import WelcomeView from './views/WelcomeView';
import {Route, Switch} from 'react-router-dom';
import FrontDoorView from './views/FrontDoorView';


function RoutesSwitch () {

  return (
    <Switch>
      <Route exact path="/">
        <FrontDoorView/>
      </Route>
      <Route path="/welcome">
        <WelcomeView/>
      </Route>
    </Switch>
  );
};

RoutesSwitch.propTypes = {};

export default RoutesSwitch;
