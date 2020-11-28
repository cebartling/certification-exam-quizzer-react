import {gql} from "@apollo/client";

const CertificationExamsQuery = gql`
    query CertificationExams {
        certificationExams {
            id
            name
            createdAt
            updatedAt
        }
    }
`;

export default CertificationExamsQuery;
