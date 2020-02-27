import { gql } from 'apollo-boost';

export const createUser = gql`
  mutation($data: UserCreateInput!) {
    createUser(data: $data) {
      user {
        firstName
        lastName
        username
        email
        id
      }
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const info = gql`
  query{
    info
  }
`

export const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const getProfile = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;