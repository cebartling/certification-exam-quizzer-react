import React from 'react';
import {useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamQuestionsQuery from '../graphql/queries/CertificationExamQuestionsQuery';
import ExamQuestionListItem from '../components/ExamQuestionListItem';
import './ExamQuestionListView.scss';

function ExamQuestionView() {
  // @ts-ignore
  const { id } = useParams();
  const {loading, error, data} = useQuery(CertificationExamQuestionsQuery, {
    variables: {
      id: id,
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.certificationExam.name}</h1>
      <h2>Questions</h2>
      <div className="exam-question-list">
        {data.certificationExam.examQuestions.edges.map((examQuestion: any) => {
          return (<ExamQuestionListItem examQuestion={examQuestion} key={examQuestion.node.id} />);
        })}
      </div>
    </div>
  );
}

export default ExamQuestionView;
