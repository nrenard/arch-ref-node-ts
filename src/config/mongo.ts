/* tslint:disable no-console */
import mongoose from 'mongoose';
import { Mockgoose } from 'mock-mongoose';

export const mockgoose = new Mockgoose(mongoose);

const isTest = process.env.NODE_ENV === 'test';

const connect = (uri?: any): Promise<any> => mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(console.error);

export default () => {
  if (!isTest) {
    return connect(process.env.MONGO_URL);
  }

  return mockgoose.prepareStorage().then(() => connect());
};
