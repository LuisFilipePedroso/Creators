import { gql } from "graphql-request";

const creatorQuery = gql`
  query CreatorQuery($nickname: String!) {
    creator(where: { nickname: $nickname }) {
      id
      name
      bio
      photo {
        url
      }
      links {
        __typename
        ... on NormalLink {
          id
          name
          url
        }
        ... on YoutubeLink {
          id
          url
        }
      }
    }
  }
`;

export default creatorQuery;
