import { gql } from 'apollo-boost';

export const SIGNUP_USER = gql`
mutation ($username: String!, $rollBased: String!, $email: String!, $password: String!) {
  signupUser(username: $username, rollBased: $rollBased, email: $email, password: $password) {
    token
  }
}

`;

export const SIGNIN_USER = gql`
mutation ($username: String!, $password: String!) {
  signinUser(username: $username, password: $password) {
    token
  }
}

`;

export const GET_CURRENT_USER =gql`
query{
  getCurrentUser{
    username
    joineDate
    email
    rollBased
    

  }
}






`; 