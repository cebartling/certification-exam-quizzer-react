import React from 'react';
import './ExamQuestionListItem.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type ExamQuestionListItemProps = {
  examQuestion: any,
};

function ExamQuestionListItem({examQuestion}: ExamQuestionListItemProps) {

  return (
    <div className="exam-question-list-item flex-row">
      <div>{examQuestion.node.questionText}</div>
      <div>
        <FontAwesomeIcon icon={"edit"} />
        <FontAwesomeIcon icon={"trash"} />
      </div>
    </div>
  );
}

export default ExamQuestionListItem;
