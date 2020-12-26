import React from 'react';
import {Link} from 'react-router-dom';
import './ExamQuestionListItem.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useMutation} from '@apollo/client';
import DeleteExamQuestionMutation from '../../graphql/mutations/DeleteExamQuestionMutation';
import {v4 as uuidv4} from 'uuid';
import {toast} from 'react-toastify';

type ExamQuestionListItemProps = {
  examQuestion: any,
  certificationExamId: string,
  refetch: Function,
};

function ExamQuestionListItem({examQuestion, certificationExamId, refetch}: ExamQuestionListItemProps) {
  const [deleteExamQuestion] = useMutation(DeleteExamQuestionMutation);

  async function onClickTrashButton() {
    try {
      await deleteExamQuestion({
        variables: {
          input: {
            id: examQuestion.node.id,
            clientMutationId: uuidv4()
          }
        }
      });
      toast.success(`Deleted the exam question.`, {position: toast.POSITION.BOTTOM_RIGHT});
      refetch();
    } catch (e) {
      const message = 'Unable to delete the exam question.';
      console.error(message, e);
      toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT});
    }
  }

  return (
    <div className="exam-question-list-item flex-row">
      <div>{examQuestion.node.questionText}</div>
      <div>
        <Link to={`/certification-exam/${certificationExamId}/editor/${examQuestion.node.id}`}
              className="btn btn-outline-primary">
          <FontAwesomeIcon icon={"edit"} />
        </Link>
        <button className="btn btn-outline-danger ml-1" onClick={onClickTrashButton}>
          <FontAwesomeIcon icon={"trash"} />
        </button>
      </div>
    </div>
  );
}

export default ExamQuestionListItem;
