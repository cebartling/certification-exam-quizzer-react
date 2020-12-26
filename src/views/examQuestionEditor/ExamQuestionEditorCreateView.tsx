import React from 'react';
import {useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamTopicsQuery from '../../graphql/queries/CertificationExamTopicsQuery';
import ExamQuestionCreateForm from './ExamQuestionCreateForm';

function ExamQuestionEditorCreateView() {
  // @ts-ignore
  const {id} = useParams();
  const {loading, error, data} = useQuery(CertificationExamTopicsQuery, {
    variables: {
      id: id
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.certificationExam.name}</h1>
      <ExamQuestionCreateForm certificationExamId={data.certificationExam.id} />
    </div>
  );
}

export default ExamQuestionEditorCreateView;

