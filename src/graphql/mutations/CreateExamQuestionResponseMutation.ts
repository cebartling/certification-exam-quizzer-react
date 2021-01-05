import {gql} from '@apollo/client';

const CreateExamQuestionResponseMutation = gql`
    mutation CreateExamQuestionResponse($input: CreateExamQuestionResponseMutationInput!) {
        createExamQuestionResponse(input: $input) {
            clientMutationId
            errors
            examQuestionResponse {
                id
                responseText
                explanationText
                correct
            }
        }
    }
`;

export default CreateExamQuestionResponseMutation;
