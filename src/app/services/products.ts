import Product from '~/app/models/Product';

const MESSAGES_MAP = {
  NOT_FOUND: {
    status: 404,
    message: 'Product does not exist.',
  },
};

interface ProductCreate {
  title: string;
  price: number;
  quantity: number;
}

interface ProductUpdate {
  title?: string;
  price?: number;
  quantity?: number;
}

export const getProducts = async ({
  page = 1, sort = '-createdAt', limit = 10, ...filter
}): Promise<any> => {
  const products = await Product.paginate(filter, { page, sort, limit });
  return products;
};

export const findProduct = async (id: string): Promise<any> => {
  const product = await Product.findById(id);

  if (!product) throw MESSAGES_MAP.NOT_FOUND;

  return product;
};

export const createProduct = async (data: ProductCreate): Promise<any> => {
  const product = await Product.create(data);
  return product;
};

export const deleteProduct = async (id: string): Promise<any> => {
  const deleted: any = await Product.deleteOne({ _id: id });
  if (deleted && deleted.deletedCount < 1) throw MESSAGES_MAP.NOT_FOUND;

  return true;
};

export const updateProduct = async (id: string, data: ProductUpdate): Promise<any> => {
  const { n } = await Product.updateOne({ _id: id }, data);

  if (n < 1) throw MESSAGES_MAP.NOT_FOUND;
};
