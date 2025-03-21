import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import { mikroORMem } from './mikrorm';
import http from 'http';
import setupSocket from './socket';

const app = express();
const port = process.env.PORT;
const server = http.createServer(app);

const startServer = async () => {
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(mikroORMem);
  app.use('/', routes);

  setupSocket(server);

  server.listen(port, () => {
    console.log(`Server is now listening to http://localhost:${port}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start the server:', err);
});
