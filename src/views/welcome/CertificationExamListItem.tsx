import React from 'react';
import {Link} from "react-router-dom";

function CertificationExamListItem(props: any) {

  const {certificationExam} = props;

  return (
    <div key={certificationExam.id}>
      <Link to={`/certification-exam/${certificationExam.id}`}>{certificationExam.name}</Link>
    </div>
  );
}

export default CertificationExamListItem;
