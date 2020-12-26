import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamQuestionsQuery from '../../graphql/queries/CertificationExamQuestionsQuery';
import ExamQuestionListItem from './ExamQuestionListItem';
import './ExamQuestionListView.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import useQueryParameters from '../../hooks/UseQueryParameters';

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
  useEffect(() => {
    if (queryParameters.get('shouldRefetch')) {
      // TODO: Migrate this to async/await
      refetch().then(() => {
        history.push(`/certification-exam/${id}/questions`);
      });
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.certificationExam.name}</h1>
      <h2>Questions</h2>
      <div>
        <Link to={`/certification-exam/${id}/editor`}
              className="btn btn-outline-success">
          <FontAwesomeIcon icon={"plus"}/>
        </Link>
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
