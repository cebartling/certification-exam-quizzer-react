import React from 'react';
import {useForm} from 'react-hook-form';
import {useMutation} from '@apollo/client';
import {v4 as uuidv4} from 'uuid';
import {toast} from 'react-toastify';
import UpdateExamQuestionMutation from '../../graphql/mutations/UpdateExamQuestionMutation';

type ExamQuestionEditFormProps = {
  examQuestion: any,
};

function ExamQuestionEditForm({examQuestion}: ExamQuestionEditFormProps) {
  const {register, handleSubmit, watch, errors} = useForm();
  const [updateExamQuestion] = useMutation(UpdateExamQuestionMutation);
  const certificationExamId = examQuestion.certificationExam.id;

  const onSubmit = async (formData: any) => {
    try {
      await updateExamQuestion({
        variables: {
          input: {
            id: examQuestion.id,
            questionText: watch('questionText'),
            singleAnswer: watch('answerType') === 'single',
            certificationExamId,
            difficulty: 1,
            clientMutationId: uuidv4()
          }
        }
      });
      toast.success(`Updated existing exam question.`, {position: toast.POSITION.BOTTOM_RIGHT});
    } catch (e) {
      const message = 'Unable to update existing exam question.';
      console.error(message, e);
      toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    }
  };

  const renderSingleAnswerCheckbox = () => {
    if (examQuestion.singleAnswer) {
      return (
        <input className="form-check-input"
               type="radio"
               name="answerType"
               id="singleAnswer"
               value="single"
               ref={register}
               defaultChecked
        />
      );
    } else {
      return (
        <input className="form-check-input"
               type="radio"
               name="answerType"
               id="singleAnswer"
               value="single"
               ref={register}
        />
      );
    }
  };

  const renderMultipleAnswerCheckbox = () => {
    if (!examQuestion.singleAnswer) {
      return (
        <input className="form-check-input"
               type="radio"
               name="answerType"
               id="multipleAnswers"
               ref={register}
               value="multiple"
               defaultChecked
        />
      );
    } else {
      return (
        <input className="form-check-input"
               type="radio"
               name="answerType"
               id="multipleAnswers"
               ref={register}
               value="multiple"
        />
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group row">
        <label htmlFor="questionText"
               className="col-sm-2 col-form-label">Question text</label>
        <div className="col-sm-10">
          <textarea
            rows={8}
            name="questionText"
            id="questionText"
            ref={register({required: true})}
            className="form-control"
            defaultValue={examQuestion.questionText}>
          </textarea>
          {errors.questionText && <span className="text-danger">This field is required</span>}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="questionText"
               className="col-sm-2 col-form-label">Answer type</label>
        <div className="col-sm-10">
          <div className="form-check">
            {renderSingleAnswerCheckbox()}
            <label className="form-check-label"
                   htmlFor="singleAnswer">
              Single answer
            </label>
          </div>
          <div className="form-check">
            {renderMultipleAnswerCheckbox()}
            <label className="form-check-label"
                   htmlFor="multipleAnswers">
              Multiple answers
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-2">
          &nbsp;
        </div>
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  );
}

export default ExamQuestionEditForm;
