import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import PropTypes from "prop-types";
import WelcomeView from './views/WelcomeView';
import FrontDoorView from './views/FrontDoorView';
import CertificationExamView from './views/CertificationExamView';
import CertificationExamEditorView from './views/CertificationExamEditorView';
import QuizView from './views/QuizView';
import PracticeExamView from './views/PracticeExamView';


function RoutesSwitch() {

  return (
    <Switch>
      <Route exact path="/">
        <FrontDoorView/>
      </Route>
      <Route path="/welcome">
        <WelcomeView/>
      </Route>
      <Route exact path="/certification-exam/:id">
        <CertificationExamView/>
      </Route>
      <Route exact path="/certification-exam/:id/editor">
        <CertificationExamEditorView/>
      </Route>
      <Route exact path="/certification-exam/:id/quiz">
        <QuizView/>
      </Route>
      <Route exact path="/certification-exam/:id/practice-exam">
        <PracticeExamView/>
      </Route>
    </Switch>
  );
};

RoutesSwitch.propTypes = {};

export default RoutesSwitch;
