import { gql } from 'apollo-boost';

export const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      user {
        email
        firstName
        lastName
        username
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

export {createUser, login, getProfile}