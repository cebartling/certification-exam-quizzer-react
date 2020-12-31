import React from 'react';
import {useForm} from 'react-hook-form';
// import {useHistory} from 'react-router';
// import {useMutation} from '@apollo/client';
// import CreateExamQuestionMutation from '../../graphql/mutations/CreateExamQuestionMutation';
// import {v4 as uuidv4} from 'uuid';
// import {toast} from 'react-toastify';

type ExamQuestionResponseFormProps = {
  examQuestion: any,
  cancelFunction: Function
}


function ExamQuestionResponseForm({examQuestion, cancelFunction}: ExamQuestionResponseFormProps) {
  const {register, handleSubmit, errors} = useForm();
  // const history = useHistory();
  // const [createExamQuestion] = useMutation(CreateExamQuestionMutation);
  // let examQuestionId: string;

  const onSubmit = async (formData: any) => {
    // try {
    //   const result = await createExamQuestion({
    //     variables: {
    //       input: {
    //         responseText: watch('responseText'),
    //         explanationText: watch('explanationText'),
    //         correct: watch('isCorrect') === 'correct',
    //         examQuestionId: examQuestion.id,
    //         clientMutationId: uuidv4()
    //       }
    //     }
    //   });
    //   examQuestionId = result.data.createExamQuestion.examQuestion.id;
    //   // history.push(`/certification-exam/${certificationExamId}/questions?shouldRefetch=true`);
    //   toast.success(`Created new exam question response.`, {position: toast.POSITION.BOTTOM_RIGHT});
    // } catch (e) {
    //   const message = 'Unable to create new exam question response.';
    //   console.error(message, e);
    //   toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    // }
  };

  function onClickCancelButton(e: React.MouseEvent) {
    cancelFunction();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group row">
        <label htmlFor="responseText"
               className="col-sm-2 col-form-label">Response text</label>
        <div className="col-sm-10">
          <textarea
            rows={8}
            name="responseText"
            id="responseText"
            ref={register({required: true})}
            className="form-control">
          </textarea>
          {errors.responseText && <span className="text-danger">This field is required</span>}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="explanationText"
               className="col-sm-2 col-form-label">Response text</label>
        <div className="col-sm-10">
          <textarea
            rows={8}
            name="explanationText"
            id="explanationText"
            ref={register({required: false})}
            className="form-control">
          </textarea>
          {/*{errors.explanationText && <span className="text-danger">This field is required</span>}*/}
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-2">
          &nbsp;
        </div>
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary" onClick={onClickCancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExamQuestionResponseForm;
