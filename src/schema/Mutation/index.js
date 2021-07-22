const Mutation = `type Mutation {
  createPost(author: String! comment: String!): [Post]
}`;

module.exports = { Mutation };
