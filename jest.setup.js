const mongoose = require('mongoose');
const { mockgoose } = require('./src/config/mongo');

afterAll((done) => {
  mongoose.disconnect().then(() => {
    mockgoose.killMongo();
    done();
  });
});
