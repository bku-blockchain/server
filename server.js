import mongoose from 'mongoose';
import { db } from './config';

/** Connect database mongodb  */
mongoose.connect(db.uriMongo, (err) => {
  if (err) {
    console.error(err);
    return process.exit(0);
  }
  console.log('MongoDB is connected');

  // Define models Mongoose
  require('./models');

  // Start server ExpressJS
  require('./app');
});
