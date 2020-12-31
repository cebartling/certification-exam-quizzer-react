import React from 'react';
import ExamQuestionResponseFormModal from './ExamQuestionResponseFormModal';

type ExamQuestionResponseEditorProps = {
  examQuestion: any,
}

function ExamQuestionResponseEditor({examQuestion}: ExamQuestionResponseEditorProps) {

  function renderResponses(examQuestionResponses: any) {
    if (!examQuestion.nodes) {
      return <div>No responses currently associated with this exam question.</div>;
    } else {
      // return ({examQuestionResponses?.map((examQuestionResponse: any) => {
      //       return (
      //         <div>
      //           {examQuestionResponse.id}
      //         </div>
      //       );
      //     })}
      // )
      return <div>Responses go here</div>;
    }
  }

  return (
    <div>
      <ExamQuestionResponseFormModal  examQuestion={examQuestion}/>
      {renderResponses(examQuestion.nodes)}
    </div>
  );
}

export default ExamQuestionResponseEditor;
