const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  bid: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  etherscan_url: {
    type: String,
    default: 'https://ropsten.etherscan.io'
  }
});

mongoose.model('Entry', EntrySchema);
