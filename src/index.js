const { ApolloServer, makeExecutableSchema } = require("apollo-server");

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

let server;

const config = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  subscriptions: {
    path: "/subscriptions",
  },
};

const createApolloServer = () => {
  if (!server) {
    console.log("Creating a new Apollo Server instance");
    try {
      server = new ApolloServer(config);
    } catch (error) {
      console.log("Failed to create a new Apollo Server instance", error.stack);
    }

    return server;
  }

  console.log("Using the existing Apollo Server instance");

  return server;
};

createApolloServer()
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((error) => {
    console.log(`🚀  Error ${error.message}`);
  });
