import request from 'supertest';

import factory from '../factories';
import truncate from '../utils/truncate';

import server from '../../src/server';

describe('Products', () => {
  const randomId = '5e4692337aa83640e15e9ad0';
  const notFoundBody = { message: 'Product does not exist.' };
  const mockProduct = {
    title: 'Teste',
    quantity: 1,
    price: 1000,
  };

  beforeEach(async () => {
    await truncate();
  });

  it('should be get list products.', async (done) => {
    await factory.create('Product');

    const { body, status } = await request(server)
      .get('/products')
      .send();

    expect(status).toBe(200);
    expect(1).toBe(body.docs.length);
    expect(10).toBe(body.limit);
    expect(1).toBe(body.page);
    expect(1).toBe(body.pages);
    expect(1).toBe(body.total);

    done();
  });

  it('should be create new product, with success.', async (done) => {
    const { body, status } = await request(server)
      .post('/products')
      .send(mockProduct);

    expect(status).toBe(201);
    expect(mockProduct.title).toBe(body.title);
    expect(mockProduct.quantity).toBe(body.quantity);
    expect(mockProduct.price).toBe(body.price);

    done()
  });

  it('should be find product detail, with success.', async (done) => {
    const {
      _id, title, quantity, price,
    } = await factory.create('Product');

    const { body, status } = await request(server).get(`/products/${_id}`);

    expect(status).toBe(200);
    expect(title).toBe(body.title);
    expect(quantity).toBe(body.quantity);
    expect(price).toBe(body.price);

    done();
  });

  it('should be find product detail, with error.', async (done) => {
    const { body, status } = await request(server).get(`/products/${randomId}`);

    expect(status).toBe(404);
    expect(notFoundBody).toMatchObject(body);

    done();
  });

  it('should be delete product, with success.', async (done) => {
    const { _id } = await factory.create('Product');
    const { status } = await request(server).del(`/products/${_id}`);

    expect(status).toBe(204);

    done();
  });

  it('should be delete product, with error.', async (done) => {
    const { status, body } = await request(server).del(`/products/${randomId}`);

    expect(status).toBe(404);
    expect(notFoundBody).toMatchObject(body);

    done();
  });

  it('should be update product, with success.', async (done) => {
    const { _id } = await factory.create('Product');

    const { status } = await request(server).put(`/products/${_id}`).send(mockProduct);

    expect(status).toBe(204);

    done();
  });

  it('should be update product, with error.', async (done) => {
    const { body, status } = await request(server).put(`/products/${randomId}`).send(mockProduct);

    expect(status).toBe(404);
    expect(notFoundBody).toMatchObject(body);

    done();
  });
});
