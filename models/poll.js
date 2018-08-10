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
  eventID: String,
  ownerID: String,
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
  maxSelected: {
    type: Number,
    default: 1
  },
  options: [{
    id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: 'Please fill a name for option'
    },
    description: {
      type: String
    }
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
