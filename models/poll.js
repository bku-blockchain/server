const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  id: {
    type: String,
    index: {
      unique: true,
      sparse: true
    }
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
  questions: [{
    // Ordinal of question in a poll
    ordinal: {
      type: Number,
      required: 'Please add oridinal for question'
    },
    title: {
      type: String,
      required: 'Please fill in a title for question'
    },
    type: {
      type: String,
      enum: ['Rating', 'Polling'],
      required: 'Please choose type for question, Rating or Polling'
    },
    maxSelected: {
      type: Number, // only for Polling type
      default: 1
    },
    /**
     * Use for both Rating and Polling
     */
    options: [{
      ordinal: {
        type: Number,
        required: 'Please order your options in question'
      },
      name: {
        type: String,
        required: 'Please fill a name for option'
      }
    }]
  }],
  eth: {
    address: String,
    owner: String
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

mongoose.model('Poll', PollSchema);
