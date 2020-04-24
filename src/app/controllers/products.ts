import { Request, Response } from 'express';
import {
  getProducts,
  createProduct,
  deleteProduct,
  findProduct,
  updateProduct,
} from '~/app/services/products';

export const index = async (req: Request, res: Response) => {
  const products = await getProducts(req.query);
  return res.json(products);
};

export const store = async (req: Request, res: Response) => {
  const product = await createProduct(req.body);
  return res.status(201).json(product);
};

export const show = async (req: Request, res: Response) => {
  const product = await findProduct(req.params.id);
  return res.json(product);
};

export const destroy = async (req: Request, res: Response) => {
  await deleteProduct(req.params.id);
  return res.status(204).send();
};

export const update = async (req: Request, res: Response) => {
  const product = await updateProduct(req.params.id, req.body);
  return res.status(204).json(product);
};
