const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  id: {
    type: String,
    index: {
      unique: true,
      sparse: true
    }
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

mongoose.model('Poll', PollSchema);
