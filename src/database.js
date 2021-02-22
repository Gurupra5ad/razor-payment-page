/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');

const USERNAME = process.env.USERNAME_MONGODB;
const PASSWORD = process.env.PASSWORD_MONGODB;
const CLUSTER = process.env.CLUSTER_MONGODB;
const DATABASE = process.env.DATABASE_MONGODB;

const dburi = "mongodb+srv://guruprasad:93oAovSLx11alMoP@cluster1.sne4s.mongodb.net/razorpay_mern?retryWrites=true&w=majority&ssl=false";

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(dburi, options)
  .then(() => {
    console.log('Successful connection MongoDB');
  })
  .catch((err) => {
    console.log('Unsuccessful connection MongoDB', err);
  });

module.exports = mongoose;
