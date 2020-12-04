import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';

type ExamQuestionFormProps = {
  certificationExamId: string
};

function ExamQuestionForm({certificationExamId}: ExamQuestionFormProps) {
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = (data: any) => {
    console.log(watch('questionText'));
    console.log(watch('answerType'));
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
            className="form-control">
          </textarea>
          {errors.questionText && <span className="text-danger">This field is required</span>}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="questionText"
               className="col-sm-2 col-form-label">Answer type</label>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   name="answerType"
                   id="singleAnswer"
                   value="single"
                   ref={register}
                   defaultChecked/>
              <label className="form-check-label"
                     htmlFor="singleAnswer">
                Single answer
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   name="answerType"
                   id="multipleAnswers"
                   ref={register}
                   value="multiple"/>
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

ExamQuestionForm.propTypes = {
  certificationExamId: PropTypes.string.isRequired
};

export default ExamQuestionForm;
