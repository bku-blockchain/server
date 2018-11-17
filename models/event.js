const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  event_name: {
    type: String,
    required: true
  },
  organizer: {
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
  title: String,
  description: String
});

mongoose.model('Event', EventSchema);
