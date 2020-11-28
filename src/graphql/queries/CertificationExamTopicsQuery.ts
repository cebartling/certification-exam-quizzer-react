import {gql} from "@apollo/client";


const CertificationExamTopicsQuery = gql`
    query CertificationExamTopics($id: ID!) {
        certificationExam(id: $id) {
            id
            name
            createdAt
            updatedAt
            examTopics {
                nodes {
                    id
                    name
                    createdAt
                    updatedAt
                }
            }
        }
    }
`;

export default CertificationExamTopicsQuery;
