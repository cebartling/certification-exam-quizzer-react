import {gql} from "@apollo/client";

const UpdateExamQuestionMutation = gql`
    mutation UpdateExamQuestion($input: UpdateExamQuestionMutationInput!) {
        updateExamQuestion(input: $input) {
            clientMutationId
            errors
            examQuestion {
                id
                questionText
                singleAnswer
                difficulty
            }
        }
    }
`;

export default UpdateExamQuestionMutation;
