const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default');
const { loadFiles } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault,
    ]
  });
  await server.start();

  app.use(expressMiddleware(server));
}

module.exports = { useGraphql };