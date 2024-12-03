import { gql } from "@apollo/client";

export const GET_COMMS = gql`
  query GetComments {
    comments @rest(type: "Comment", path: "comments") {
      postId
      id
      name
      email
      body
    }
  }
`