const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  eventID: {
    type: String
  },
  checks: [{
    type: Boolean,
    required: true
  }]
});

mongoose.model('Interest', InterestSchema);
