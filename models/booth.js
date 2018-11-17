const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoothSchema = new Schema({
  bid: {
    type: String,
    unique: true,
    required: true
  },
  booth_name: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  starting_date: {
    type: Date,
    required: true
  },
  photo_url: {
    type: String,
    required: true
  },
  vid: {
    type: String,
    required: true
  },
  rating: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    star: {
      type: Number,
      min: 1,
      max: 5
    }
  }]
});

mongoose.model('Booth', BoothSchema);
