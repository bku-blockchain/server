const mongoose = require('mongoose');
const crypto = require('crypto');
const cryptoJS = require('crypto-js');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    index: {
      unique: true,
      sparse: true
    }
  },
  email: {
    type: String,
    index: {
      unique: true,
      sparse: true
    },
    lowercase: true,
    trim: true,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  salt: String,
  role: {
    enum: ['Attender', 'Organizer', 'Admin'],
    default: 'Attender'
  },
  eth: {
    address: {
      type: String
    }
  }
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
