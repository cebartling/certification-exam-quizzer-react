import React from 'react';
import ExamQuestionResponseFormModal from './ExamQuestionResponseFormModal';

type ExamQuestionResponseEditorProps = {
  examQuestion: any,
  refetchQuery: Function
}

function ExamQuestionResponses({examQuestion, refetchQuery}: ExamQuestionResponseEditorProps) {

  return (
    <div>
      <ExamQuestionResponseFormModal examQuestion={examQuestion} refetchQuery={refetchQuery}/>
      {examQuestion.examQuestionResponses.nodes && examQuestion.examQuestionResponses.nodes?.map((examQuestionResponse: any) => {
        return (
          <div key={examQuestionResponse.id}>
            {examQuestionResponse.responseText}
          </div>
        );
      })}
    </div>
  );
}

export default ExamQuestionResponses;
