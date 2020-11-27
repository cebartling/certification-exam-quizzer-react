import {gql} from "@apollo/client";

const CertificationExams = gql`
    query CertificationExams {
        certificationExams {
            id
            name
            createdAt
            updatedAt
        }
    }
`;

export default CertificationExams;
