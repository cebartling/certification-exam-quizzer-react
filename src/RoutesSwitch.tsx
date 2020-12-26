import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WelcomeView from './views/welcome/WelcomeView';
import FrontDoorView from './views/frontDoor/FrontDoorView';
import CertificationExamView from './views/certificationExam/CertificationExamView';
import ExamQuestionEditorCreateView from './views/examQuestionEditor/ExamQuestionEditorCreateView';
import ExamQuestionEditorEditView from './views/examQuestionEditor/ExamQuestionEditorEditView';
import QuizView from './views/quiz/QuizView';
import PracticeExamView from './views/practiceExam/PracticeExamView';
import ExamQuestionListView from './views/examQuestionList/ExamQuestionListView';


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
      <Route exact path="/certification-exam/:id/questions">
        <ExamQuestionListView/>
      </Route>
      <Route exact path="/certification-exam/:id/editor">
        <ExamQuestionEditorCreateView/>
      </Route>
      <Route exact path="/certification-exam/:id/editor/:questionId">
        <ExamQuestionEditorEditView/>
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
