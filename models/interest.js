const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  eventID: {
    type: String,
    required: true
  },
  villages: [{
    type: Schema.Types.ObjectId,
    ref: 'Village'
  }]
});

mongoose.model('Interest', InterestSchema);
