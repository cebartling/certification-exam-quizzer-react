import React from 'react';
import {useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import ExamQuestionQuery from '../../graphql/queries/ExamQuestionQuery';
import ExamQuestionEditForm from './ExamQuestionEditForm';
import ExamQuestionResponseEditor from './ExamQuestionResponseEditor';

type ExamQuestionEditorEditViewRouteParams = {
  id: string,
  questionId: string,
}

function ExamQuestionEditorCreateView() {
  const {questionId}: ExamQuestionEditorEditViewRouteParams = useParams();
  const {loading, error, data} = useQuery(ExamQuestionQuery, {
    variables: {
      id: questionId
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.examQuestion.certificationExam.name}</h1>
      <ExamQuestionEditForm examQuestion={data.examQuestion}/>
      <ExamQuestionResponseEditor examQuestion={data.examQuestion}/>
    </div>
  );
}

export default ExamQuestionEditorCreateView;

