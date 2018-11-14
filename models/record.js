const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  userID: {
    type: String,
    required: 'User is required'
  },
  partner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'Partner is required'
  },
  time: {
    type: Date,
    default: Date.now
  },
  note: {
    type: String,
    default: ''
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

mongoose.model('Record', RecordSchema);
