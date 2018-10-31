const mongoose = require('mongoose');
const crypto = require('crypto');
const cryptoJS = require('crypto-js');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true,
    trim: true,
    required: 'Username is required'
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Email is required'
  },
  tel: {
    type: String,
    unique: true,
    trim: true,
    required: 'Tel is required'
  },
  displayName: {
    firstName: {
      type: String,
      trim: true,
      default: ''
    },
    lastName: {
      type: String,
      trim: true,
      default: ''
    }
  },
  photoUrl: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  salt: String,
  tokenExpire: Number
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

UserSchema.methods.hashPassword = function (password) {
  if (this.salt && password) {
    return cryptoJS.SHA256(this.salt + password).toString(cryptoJS.enc.Base64);
  }
  return password;
};

UserSchema.methods.authenticate = function (password) {
  return this.hashPassword(password) == this.password;
};

UserSchema.pre('save', function (next) {
  if (this.password && this.isModified('password')) {
    this.salt = crypto.randomBytes(16).toString('base64');
    this.password = this.hashPassword(this.password);
  }
  next();
});


mongoose.model('User', UserSchema);
