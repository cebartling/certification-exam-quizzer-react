import {gql} from "@apollo/client";

const CertificationExamQuestionsQuery = gql`
    query CertificationExamQuestions($id: ID!) {
        certificationExam(id: $id) {
            id
            name
            createdAt
            updatedAt
            examQuestions {
                pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                }
                edges {
                    cursor
                    node {
                        id
                        questionText
                        singleAnswer
                        difficulty
                        createdAt
                        updatedAt
                    }
                }
            }
        }
    }
`;

export default CertificationExamQuestionsQuery;
