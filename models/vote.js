const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  pollID: {
    type: Schema.Types.ObjectId,
    ref: 'Poll',
    required: 'Vote should be used for a Poll, required pollID'
  },
  userID: {
    type: String
  },
  ballots: [{
    id: String
  }],
  hashValue: String,
  eth: {
    txHash: String
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

mongoose.model('Vote', VoteSchema);
