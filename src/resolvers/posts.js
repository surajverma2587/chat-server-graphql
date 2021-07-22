const { PubSub } = require("apollo-server");

const pubsub = new PubSub();

const postsData = [
  {
    author: "Bob",
    comment: "Hi Alice",
  },
  {
    author: "Alice",
    comment: "Hello Bob",
  },
];

const posts = () => {
  return postsData;
};

const createPost = (_, { comment, author }) => {
  postsData.push({ comment, author });
  pubsub.publish("POST_CREATED", { postCreated: { comment, author } });
  return postsData;
};

const postCreated = () => pubsub.asyncIterator(["POST_CREATED"]);

module.exports = { posts, createPost, postCreated };
