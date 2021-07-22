const { posts, createPost, postCreated } = require("./posts");

const resolvers = {
  Query: {
    posts,
  },
  Mutation: {
    createPost,
  },
  Subscription: {
    postCreated: {
      subscribe: postCreated,
    },
  },
};

module.exports = { resolvers };
