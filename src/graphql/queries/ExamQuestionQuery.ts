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
            createdAt
            updatedAt
        }
    }
`;

export default ExamQuestionQuery;
