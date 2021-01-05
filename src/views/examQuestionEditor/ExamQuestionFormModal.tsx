import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {useMutation} from '@apollo/client';
import {v4 as uuidv4} from 'uuid';
import CreateExamQuestionMutation from '../../graphql/mutations/CreateExamQuestionMutation';
import UpdateExamQuestionMutation from '../../graphql/mutations/UpdateExamQuestionMutation';

type ExamQuestionFormModalProps = {
  certificationExamId: string,
  examQuestion?: any,
  refetchQuery: Function,
}

function ExamQuestionFormModal({certificationExamId, examQuestion, refetchQuery}: ExamQuestionFormModalProps) {
  const [show, setShow] = useState(false);
  const {handleSubmit, register, watch, errors} = useForm();
  const [createExamQuestion] = useMutation(CreateExamQuestionMutation);
  const [updateExamQuestion] = useMutation(UpdateExamQuestionMutation);

  const closeDialog = () => setShow(false);
  const showDialog = () => setShow(true);

  async function create() {
    try {
      await createExamQuestion({
        variables: {
          input: {
            questionText: watch('questionText'),
            singleAnswer: watch('answerType') === 'single',
            certificationExamId,
            difficulty: 1,
            clientMutationId: uuidv4()
          }
        }
      });
      refetchQuery();
      toast.success(`Created new exam question.`, {position: toast.POSITION.BOTTOM_RIGHT});
      setShow(false);
    } catch (e) {
      const message = 'Unable to create new exam question.';
      console.error(message, e);
      toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    }
  }

  async function update() {
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
      refetchQuery();
      toast.success(`Updated the exam question.`, {position: toast.POSITION.BOTTOM_RIGHT});
      setShow(false);
    } catch (e) {
      const message = 'Unable to update the exam question.';
      console.error(message, e);
      toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    }
  }

  const onSubmit = async (formData: any) => {
    if (examQuestion) {
      await update();
    } else {
      await create();
    }
  };

  return (
    <div
      onKeyDown={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
      onFocus={e => e.stopPropagation()}
      onMouseOver={e => e.stopPropagation()}
      onSubmit={e => e.stopPropagation()}>
      <Button variant="primary" onClick={showDialog}>
        Add exam question
      </Button>

      <Modal show={show} onHide={closeDialog} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Exam question response</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group controlId="questionText">
              <Form.Label>Question text</Form.Label>
              <Form.Control name="questionText"
                            as="textarea"
                            ref={register({required: true})}
                            defaultValue={examQuestion ? examQuestion.questionText : ''}/>
              <Form.Text className="text-danger">
                {errors.questionText && <span>This field is required.</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="answerType">
              <Form.Check type="radio"
                          name="answerType"
                          id="singleAnswerType"
                          label="Single answer"
                          ref={register}
                          value="single"
                          defaultChecked={examQuestion && examQuestion.singleAnswer}/>
              <Form.Check type="radio"
                          name="answerType"
                          id="multipleAnswerType"
                          label="Multiple answers"
                          ref={register}
                          value="multiple"
                          defaultChecked={examQuestion && !examQuestion.singleAnswer}/>
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

export default ExamQuestionFormModal;
