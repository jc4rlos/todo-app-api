import express from 'express';
import logger from 'morgan';
import router from './routes/routers';
import { errorResponseMiddleware } from './middleware';
import './config/database';

const buildApp = () => {
  const app = express();
  app
    .use(logger('dev'))
    .use(express.json())
    .use('/api', router)
    .use(errorResponseMiddleware);
  return app;
};

export default buildApp;
