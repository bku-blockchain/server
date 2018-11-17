import mongoose from 'mongoose';
import { db } from '../../config';

/** Connect database mongodb  */
mongoose.connect(db.uriMongo, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
  if (err) {
    console.error(err);
    return process.exit(0);
  }
  console.log('MongoDB is connected');
  console.log('Mongo URI is ', db.uriMongo);

  // Define models Mongoose
  require('../../models');

  require('./fixUserRole');
});
