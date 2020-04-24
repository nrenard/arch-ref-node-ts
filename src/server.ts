import 'express-async-errors';
import 'dotenv/config';

import express, {
  Express, Request, Response, NextFunction,
} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerConfig from '~/config/swagger';
import mongoConfig from '~/config/mongo';

import routes from '~/routes';

class Server {
  express: Express;

  isProd: boolean;

  isTest: boolean;

  constructor() {
    this.express = express();
    this.isProd = process.env.NODE_ENV === 'production';
    this.isTest = process.env.NODE_ENV === 'test';

    this.databases();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  databases() {
    mongoConfig();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.json());

    if (!this.isTest) {
      this.express.use(morgan(this.isProd ? 'common' : 'dev'));
      this.express.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
    }
  }

  routes() {
    this.express.use(routes);
  }

  exceptionHandler() {
    // eslint-disable-next-line no-unused-vars
    this.express.use((err: any, req: Request, res: Response, next: NextFunction) => {
      const message = err.data || err.message || err.errors || 'Internal server error';
      const status = err.status || 500;

      return res.status(status).json({ message });
    });
  }
}

export default new Server().express;
