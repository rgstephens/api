const { GraphQLServer } = require("graphql-yoga");

const { prisma } = require('./generated/prisma-client')


const resolvers = {
  Query: {
    info: () => `This is the API of a Serpent Tracker`,
    snakes: (root, args, context, info) => {
      return context.primsa.snakes();
    }
  },
  Mutation: {
    snake: (root, args, context) => {
      return context.prisma.createSnake({
        name: args.name,
        description: args.description
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
