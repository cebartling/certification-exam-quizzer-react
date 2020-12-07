import React from 'react';
import {useParams} from 'react-router';
import {useQuery} from '@apollo/client';
import CertificationExamTopicsQuery from '../graphql/queries/CertificationExamTopicsQuery';
import {Link} from "react-router-dom";

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
      <h1>{data.certificationExam.name}</h1>
      {/*{data.certificationExam.examTopics.nodes.map((examTopic: any) => {*/}
      {/*  return (<div key={examTopic.id}>{examTopic.name}</div>)*/}
      {/*})}*/}

      <div className="card-deck mb-3 mt-3 text-center">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Create</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li>Create new questions</li>
              <li>Categorize questions by topics</li>
            </ul>
            <Link to={`/certification-exam/${id}/questions`}
                  className="btn btn-lg btn-block btn-outline-primary">
              Contribute
            </Link>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Quiz</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li>Take a focused quiz</li>
              <li>Filter by topic</li>
            </ul>
            <Link to={`/certification-exam/${id}/quiz`}
                  className="btn btn-lg btn-block btn-outline-primary">
              Start a quiz
            </Link>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Practice Exam</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li>Take a full-length practice exam</li>
              <li>Randomized questions across all topics</li>
            </ul>
            <Link to={`/certification-exam/${id}/practice-exam`}
                  className="btn btn-lg btn-block btn-outline-primary">
              Start a practice exam
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationExamView;

