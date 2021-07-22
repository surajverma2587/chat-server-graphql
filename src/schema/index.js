const { Query } = require("./Query");
const { Mutation } = require("./Mutation");
const { Subscription } = require("./Subscription");
const { Post } = require("./common/Post");

const typeDefs = [Query, Mutation, Subscription, Post];

module.exports = { typeDefs };
