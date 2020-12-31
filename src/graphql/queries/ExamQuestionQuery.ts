import {gql} from "@apollo/client";

const ExamQuestionQuery = gql`
    query ExamQuestion($id: ID!) {
        examQuestion(id: $id) {
            id
            questionText
            difficulty
            singleAnswer
            certificationExam {
                id
                name
            }
            examQuestionResponses {
                pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }
                nodes {
                    id
                }
            }
            createdAt
            updatedAt
        }
    }
`;

export default ExamQuestionQuery;
