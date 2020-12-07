import React from 'react';
import './ExamQuestionListItem.scss';

type ExamQuestionListItemProps = {
  examQuestion: any,
};

function ExamQuestionListItem({examQuestion}: ExamQuestionListItemProps) {

  return (
    <div className="exam-question-list-item">
      {examQuestion.node.questionText}
    </div>
  );
}

export default ExamQuestionListItem;
