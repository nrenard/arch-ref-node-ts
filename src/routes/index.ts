import { Router } from 'express';

import products from './products';

import authMiddleware from '~/app/middlewares/auth';

const routes = Router();

routes.use(authMiddleware);

routes.use('/products', products);

export default routes;
