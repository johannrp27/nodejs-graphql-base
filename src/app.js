
const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const { useGraphql } = require('./graphql');

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  require('./utils/auth');

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  routerApi(app);
  await useGraphql(app);

  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  return app;
}

module.exports = createApp;
