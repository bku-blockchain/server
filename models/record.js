const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  userID: {
    type: String
  },
  partner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  time: {
    type: Date,
    default: new Date()
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
