import React from 'react';
import {useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamTopicsQuery from '../../graphql/queries/CertificationExamTopicsQuery';

function PracticeExamView() {
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
      <h1>{data.certificationExam.name}</h1>

    </div>
  );
}

export default PracticeExamView;

