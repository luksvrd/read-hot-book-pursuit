const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): LoginAddUserResponse
    addUser(
      username: String!
      email: String!
      password: String!
    ): LoginAddUserResponse
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
  type LoginAddUserResponse {
    token: ID!
  }
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
`;

module.exports = typeDefs;
