import {gql} from "@apollo/client";

const CreateExamQuestionMutation = gql`
    mutation CreateExamQuestion($input: CreateExamQuestionMutationInput!) {
        createExamQuestion(input: $input) {
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

export default CreateExamQuestionMutation;
