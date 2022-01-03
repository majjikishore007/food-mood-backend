const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    status: {
      type: GraphQLString,
      resolve(parent, args) {
        console.log("Parent: " + parent);
        return "Welcome to GraphQL";
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
