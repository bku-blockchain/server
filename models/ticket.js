const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  tid: {
    type: String,
    unique: true,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  eventID: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  etherscan_url: {
    type: String,
    unique: true,
    default: 'https://ropsten.etherscan.io'
  },
  txHash: {
    type: String
  }
});

mongoose.model('Ticket', TicketSchema);
