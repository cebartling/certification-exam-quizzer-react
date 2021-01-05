import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamQuestionsQuery from '../../graphql/queries/CertificationExamQuestionsQuery';
import ExamQuestionListItem from './ExamQuestionListItem';
import './ExamQuestionListView.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import useQueryParameters from '../../hooks/UseQueryParameters';
import ExamQuestionFormModal from "../examQuestionEditor/ExamQuestionFormModal";

type ExamQuestionViewRouterParams = {
  id: string,
}

function ExamQuestionView() {
  const {id}: ExamQuestionViewRouterParams = useParams();
  const queryParameters = useQueryParameters();
  const history = useHistory();
  const {loading, error, data, refetch} = useQuery(CertificationExamQuestionsQuery, {
    variables: {
      id: id,
    }
  });

  async function refreshQuery() {
    await refetch();
    history.push(`/certification-exam/${id}/questions`);
  }

  useEffect(() => {
    if (queryParameters.get('shouldRefetch')) {
      refreshQuery();
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.certificationExam.name}</h1>
      <h2>Questions</h2>
      <div>
        <ExamQuestionFormModal certificationExamId={id} refetchQuery={refetch}/>
      </div>
      <div className="exam-question-list">
        {data.certificationExam.examQuestions.edges.map((examQuestion: any) => {
          return (
            <ExamQuestionListItem certificationExamId={id}
                                  examQuestion={examQuestion}
                                  refetch={refetch}
                                  key={examQuestion.node.id}/>
          );
        })}
      </div>
    </div>
  );
}

export default ExamQuestionView;
