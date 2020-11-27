import {gql} from "@apollo/client";

const UserByID = gql`
    query UserByID($id: ID!) {
        user(id: $id) {
            id
            firstName
            lastName
            username
            createdAt
            updatedAt
        }
    }
`;

export default UserByID;
