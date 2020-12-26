import React from 'react';
import {Link} from 'react-router-dom';
import './ExamQuestionListItem.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type ExamQuestionListItemProps = {
  examQuestion: any,
  certificationExamId: string,
};

function ExamQuestionListItem({examQuestion, certificationExamId}: ExamQuestionListItemProps) {

  return (
    <div className="exam-question-list-item flex-row">
      <div>{examQuestion.node.questionText}</div>
      <div>
        <Link to={`/certification-exam/${certificationExamId}/editor/${examQuestion.node.id}`}>
          <FontAwesomeIcon icon={"edit"} />
        </Link>
        <FontAwesomeIcon icon={"trash"} />
      </div>
    </div>
  );
}

export default ExamQuestionListItem;
