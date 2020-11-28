import React from 'react';
import {useQuery} from '@apollo/client';
import CertificationExamsQuery from '../graphql/queries/CertificationExamsQuery';
import CertificationExamListItem from '../components/CertificationExamListItem';

function WelcomeView() {
  const {loading, error, data} = useQuery(CertificationExamsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Welcome</h1>
      {data.certificationExams.map((certificationExam: any) => <CertificationExamListItem
        key={certificationExam.id}
        certificationExam={certificationExam}/>)}
    </div>
  );
}

export default WelcomeView;
