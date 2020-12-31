import React, {useState} from 'react';
import ExamQuestionResponseForm from "./ExamQuestionResponseForm";

type ExamQuestionResponseEditorProps = {
  examQuestion: any,
}

function ExamQuestionResponseEditor({examQuestion}: ExamQuestionResponseEditorProps) {
  const [isFormDisplayed, setFormDisplayed] = useState(false);


  function onClickAddResponse() {
    setFormDisplayed(true);
  }

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

  function onCancel() {
    setFormDisplayed(false);
  }

  return (
    <div>
      <div>
        <button onClick={onClickAddResponse} className="btn btn-outline-success" disabled={isFormDisplayed}>
          Add response
        </button>
      </div>
      {isFormDisplayed ? <ExamQuestionResponseForm examQuestion={examQuestion} cancelFunction={onCancel}/> : null}
      {renderResponses(examQuestion.nodes)}
    </div>
  );
}

export default ExamQuestionResponseEditor;
