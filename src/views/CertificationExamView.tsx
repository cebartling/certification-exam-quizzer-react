import React from 'react';
import {useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamTopicsQuery from '../graphql/queries/CertificationExamTopicsQuery';

function CertificationExamView() {
  // @ts-ignore
  const { id } = useParams();
  const {loading, error, data} = useQuery(CertificationExamTopicsQuery, {
    variables: {
      id: id
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Certification Exam</h1>
      {data.certificationExam.examTopics.nodes.map((examTopic: any) => {
        return (<div key={examTopic.id}>{examTopic.name}</div>)
      })}
    </div>
  );
}

export default CertificationExamView;

