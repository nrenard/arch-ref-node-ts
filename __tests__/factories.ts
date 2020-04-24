import faker from 'faker';
import factory from 'factory-girl';

import Product from '~/app/models/Product';

factory.define('Product', Product, {
  title: faker.commerce.productName(),
  price: faker.commerce.price(),
  quantity: faker.random.number(),
});

export default factory;
