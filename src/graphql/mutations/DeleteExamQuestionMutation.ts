import {gql} from "@apollo/client";

const DeleteExamQuestionMutation = gql`
    mutation DeleteExamQuestion($input: DeleteExamQuestionMutationInput!) {
        deleteExamQuestion(input: $input) {
            clientMutationId
            errors
            examQuestion {
                id
            }
        }
    }
`;

export default DeleteExamQuestionMutation;
