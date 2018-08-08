const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthTokenSchema = new Schema({
  userId: {
    type: String,
    unique: 'You have logined in other device',
    required: 'User ID is requierd'
  },
  token: {
    type: String,
    unique: 'Token should be unique',
    sparse: true
  },
  expire: {
    type: Date
  }
}, {
  timestamps: {
    createdAt: 'createdAt'
  }
});

mongoose.model('AuthToken', AuthTokenSchema);
