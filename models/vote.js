const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  id: {
    type: String,
    index: {
      unique: true,
      sparse: true
    }
  },
  pollID: {
    type: Schema.Types.ObjectId,
    ref: 'Poll',
    required: 'Vote should be used for a Poll, required pollID'
  },
  userID: {
    type: String
  },
  questions: [{
    ordinal: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['Rating', 'Polling'],
      required: true
    },
    /**
     * + Type Rating: options contain a list of options
     *   that user rated, field `star` should be from 0 to 5
     * + Type Polling: options conatain a list of options
     *   that user selected, field `star` is useless
     */
    options: [{
      ordinal: {
        type: Number,
        required: true
      },
      star: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
      }
    }]
  }],
  eth: {
    address: String
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

mongoose.model('Vote', VoteSchema);
