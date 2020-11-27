import {gql} from "@apollo/client";

const UserByUsername = gql`
    query UserByUsername($username: String!) {
        userByUsername(username: $username) {
            id
            firstName
            lastName
            username
            createdAt
            updatedAt
        }
    }
`;

export default UserByUsername;
