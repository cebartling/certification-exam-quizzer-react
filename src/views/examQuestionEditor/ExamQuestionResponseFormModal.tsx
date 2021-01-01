import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {useForm} from 'react-hook-form';

type ExamQuestionResponseFormModalProps = {
  examQuestion: any,
}

function ExamQuestionResponseFormModal({examQuestion}: ExamQuestionResponseFormModalProps) {
  const [show, setShow] = useState(false);
  const {handleSubmit, register} = useForm();

  const closeDialog = () => setShow(false);
  const showDialog = () => setShow(true);

  const onSubmit = async (formData: any) => {
    console.info('Submitting the form');
    // try {
    //   //   const result = await createExamQuestion({
    //   //     variables: {
    //   //       input: {
    //   //         responseText: watch('responseText'),
    //   //         explanationText: watch('explanationText'),
    //   //         correct: watch('isCorrect') === 'correct',
    //   //         examQuestionId: examQuestion.id,
    //   //         clientMutationId: uuidv4()
    //   //       }
    //   //     }
    //   //   });
    //   //   examQuestionId = result.data.createExamQuestion.examQuestion.id;
    //   //   // history.push(`/certification-exam/${certificationExamId}/questions?shouldRefetch=true`);
    //   toast.success(`Created new exam question response.`, {position: toast.POSITION.BOTTOM_RIGHT});
    //   setShow(false);
    // } catch (e) {
    //   const message = 'Unable to create new exam question response.';
    //   console.error(message, e);
    //   toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    // }
  };

  return (
    <div
      onKeyDown={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
      onFocus={e => e.stopPropagation()}
      onMouseOver={e => e.stopPropagation()}
      onSubmit={e => e.stopPropagation()}>
      <Button variant="primary" onClick={showDialog}>
        Add response
      </Button>

      <Modal show={show} onHide={closeDialog} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Exam question response</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group controlId="responseText">
              <Form.Label>Response text</Form.Label>
              <Form.Control name="responseText" as="textarea" ref={register({required: true})}/>
              <Form.Text className="text-muted">
                This field is required.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="explanationText">
              <Form.Label>Explanation text</Form.Label>
              <Form.Control name="explanationText" as="textarea" ref={register({required: false})}/>
              <Form.Text className="text-muted">
                This field is not required.
              </Form.Text>
            </Form.Group>
            <Form.Group id="correctResponse">
              <Form.Check type="checkbox" label="Correct response"/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeDialog}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default ExamQuestionResponseFormModal;
