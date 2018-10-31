const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  eventID: {
    type: String
  },
  ownerID: {
    type: String
  },
  title: {
    type: String,
    required: 'Please fill in a title for poll'
  },
  description: {
    type: String
  },
  startDate: {
    type: Date,
    required: 'Please choose a start date'
  },
  endDate: {
    type: Date,
    required: 'Please choose a end date'
  },
  candidates: [{
    id: String,
    name: String,
    description: String
  }],
  eth: {
    contractAddress: String,
    txHash: String,
    ownerAddress: String,
    contractSecretKey: String
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

mongoose.model('Poll', PollSchema);
