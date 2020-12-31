import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

type ExamQuestionResponseFormModalProps = {
  examQuestion: any,
}

function ExamQuestionResponseFormModal({examQuestion}: ExamQuestionResponseFormModalProps) {
  const [show, setShow] = useState(false);
  const {register, handleSubmit, errors} = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (formData: any) => {
    try {
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
      toast.success(`Created new exam question response.`, {position: toast.POSITION.BOTTOM_RIGHT});
      setShow(false);
    } catch (e) {
      const message = 'Unable to create new exam question response.';
      console.error(message, e);
      toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button variant="primary" onClick={handleShow}>
        Add response
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Exam question response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}

export default ExamQuestionResponseFormModal;
